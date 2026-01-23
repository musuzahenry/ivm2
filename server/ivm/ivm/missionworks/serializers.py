from . models import mission
from rest_framework import serializers




class MissionSerializer(serializers.ModelSerializer):
    class Meta:
        model = mission
        fields = ["location", "title", "description", "start_date_time", "end_date_time", "banner_image", "image2", "image3", "image4"]