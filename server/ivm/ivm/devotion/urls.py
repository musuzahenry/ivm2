from django.urls import path
from . views import DevotionList, get_last_devotion, search_devotions


urlpatterns = [
    path("list-devotions", DevotionList.as_view(), name="list-devotions"),
    path("get-last-devotion", get_last_devotion, name="get-last-devotion"),
    path("search-devotions", DevotionList.as_view(), name="search-devotions"),
]