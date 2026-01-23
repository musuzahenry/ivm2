from rest_framework import serializers
from . models import Devotion
from youtube . serializers import PreacherSerializer


class DevotionSerializer(serializers.ModelSerializer):

    preacher = PreacherSerializer(read_only = True)

    class Meta:
        model  = Devotion
        fields = ['audioID', 'title', 'link', 'preacher', 'excerpt', 'preach_date']