from django.shortcuts import render
from rest_framework import generics
from . serializers import MissionSerializer
from . models import mission

# Create your views here.

class MissionListView(generics.ListAPIView):
    serializer_class = MissionSerializer
    serializer_errors = ""
     
    #return all missions
    def get_queryset(self):
        return mission.objects.all()