from rest_framework.views import APIView
from rest_framework.decorators import api_view
from rest_framework.response import Response
from googleapiclient.discovery import build
from django.conf import settings
from . models import Sermons
from . serializers import SermonsSerializer


class YouTubeVideoList(APIView):
    def get(self, request):

        youtube = build('youtube', 'v3', developerKey = settings.YOUTUBE_API_KEY)
        page_token = request.query_params.get('token', None)
        maxResults = int(request.query_params.get('maxResults', 6))

        #search videos from my channel
        search_request = youtube.search().list(
            part="snippet",
            channelId= settings.YOUTUBE_CHANNEL_ID,
            maxResults=maxResults,
            order="date",
            type="video",
            pageToken=page_token, # Pass the token to YouTube
        )
        response = search_request.execute()

        items = response.get('items', [])
        
        #get sermon codes to help look sermons up in the db
        sermons_codes = [ item['id']['videoId'] for item in items]
        
        #get sermons using youtube sermon codes
        sermonList = Sermons.objects.filter(sermonCode__in = sermons_codes)
        registered_sermons_codes = [sermon.sermonCode for sermon in sermonList] 
        

        sermon_dict = {} #create hash table for sermon easy retrival and add into response data to be sent to frontend
        for sermon in sermonList:
            sermon_dict[sermon.sermonCode] = SermonsSerializer(sermon).data #serialize sermon pick data from it


        #if any sermon_code has no sermon object, make it none but still insert it into the hash table to handle a non error
        for sermon_code in sermons_codes:
            if not (sermon_code in registered_sermons_codes):
                sermon_dict[sermon_code] = None
        


        data = {
                'nextPageToken': response.get('prevPageToken'),
                'prevPageToken': response.get('nextPageToken'),
                'videos': [
                    {
                        'videoId': item['id']['videoId'], 
                        'sermon':sermon_dict[item['id']['videoId']], #we handled an emppty sermon_dict key, so we get no error here
                        'title': item['snippet']['title'],
                        'thumbnail': item['snippet']['thumbnails']['high']['url'],
                        'isLive': item['snippet'].get('liveBroadcastContent'),
                    } for item in items
                ]
            }
            
        return Response(data)





@api_view(["GET"])
def search_videos(request):

    query = request.query_params.get('q', None)
    page_token = request.query_params.get('token', None)
    maxResults = int(request.query_params.get('maxResults', 6))
    
    if not query or query=='':
        return Response({'error': 'No query provided'}, status=400)

    youtube = build('youtube', 'v3', developerKey=settings.YOUTUBE_API_KEY)
    
    # Use the search.list method with type='channel'
    request = youtube.search().list(
        part="snippet",
        q=query,
        channelId=settings.YOUTUBE_CHANNEL_ID,
        type="video",        # Ensures we only get videos
        maxResults=maxResults,
        order="relevance",
        pageToken=page_token, # Pass the token to YouTube
    )
    response = request.execute()

    items = response.get('items', [])


    #get sermon codes to help look sermons up in the db
    sermons_codes = [ item['id']['videoId'] for item in items ]

    sermonList = Sermons.objects.filter(sermonCode__in = sermons_codes)
    registered_sermons_codes = [sermon.sermonCode for sermon in sermonList] 
        


    sermon_dict = {} #create hash table for sermon easy retrival
    for sermon in sermonList:
            sermon_dict[sermon.sermonCode] = SermonsSerializer(sermon).data

    for sermon_code in sermons_codes:
        if not (sermon_code in registered_sermons_codes):
                sermon_dict[sermon_code] = None

    data = {
                'nextPageToken': response.get('prevPageToken'),
                'prevPageToken': response.get('nextPageToken'),
                'videos': [
                    {
                        'videoId': item['id']['videoId'],
                        'sermon':sermon_dict[item['id']['videoId']],
                        'title': item['snippet']['title'],
                        'thumbnail': item['snippet']['thumbnails']['high']['url'],
                    } for item in items
                ]
            }

    return Response(data)
