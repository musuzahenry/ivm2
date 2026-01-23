from rest_framework import serializers
from . models import Preacher, Sermons


class PreacherSerializer(serializers.ModelSerializer):
    class Meta:
        model = Preacher
        fields = ["preacherName", "origin",  "img", "imgThumbnail"]




class SermonsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sermons
        fields = ["sermonSeriesID", "preacherID", "sermonTitle","slug" 
                  ,"sermonExcept", "sermonLink", "audioLink", "sermonCode", "dateTimePreached"] 