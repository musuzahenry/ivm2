from django.urls import path
from . views import YouTubeVideoList, search_videos


urlpatterns = [
    path("video-list", YouTubeVideoList.as_view(), name="video-list"),
    path("search-videos",search_videos, name="search-videos"),
]