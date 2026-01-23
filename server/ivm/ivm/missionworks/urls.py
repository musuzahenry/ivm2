from django.urls import path
from . views import MissionListView


urlpatterns = [
    path("mission", MissionListView.as_view(), name="mission"),
]