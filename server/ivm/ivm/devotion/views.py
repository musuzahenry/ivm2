from django.shortcuts import render
from . models import Devotion
from rest_framework import generics
from . serializers import DevotionSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response



class DevotionList(generics.ListAPIView):
    model = Devotion
    serializer_class = DevotionSerializer

    def get_queryset(self):
        #get all devotions
        return Devotion.objects.all()



@api_view(["GET"])
def get_last_devotion(request):

    try:
       devotion = Devotion.objects.filter().order_by('-preach_date')[0]
    except Exception as e:
        return Response({"error": str(e)})

    serializer = DevotionSerializer(devotion)
    return Response(serializer.data)




@api_view(["GET"])
def search_devotions(request):
    q = request.query_params.get("q", None)
    devotions = Devotion.objects.filter(title__icontains = q)
    serializer = DevotionSerializer(devotions, many=True)[0,20] #limit number of results to 20
    return Response(serializer.data)





