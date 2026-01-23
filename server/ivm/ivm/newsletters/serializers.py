from rest_framework import serializers
from . models import NewsLetters
from youtube . serializers import PreacherSerializer



class NewsLettersSerializers(serializers.ModelSerializer):
    author = PreacherSerializer(read_only = True)
    
    class Meta:
        model = NewsLetters
        fields = ["file", "title", "record_date", "excerpt", "author", "thumb_nail"]