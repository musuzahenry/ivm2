from django.shortcuts import render
from . models import NewsLetters
from rest_framework import generics
from .serializers import NewsLettersSerializers
from rest_framework.decorators import api_view
from rest_framework.response import Response




class NewsLettersList(generics.ListAPIView):
    model = NewsLetters
    serializer_class = NewsLettersSerializers

    def get_queryset(self):
        #return all, we will painate usining react
        #print("number:::::"+str(NewsLetters.objects.prefetch_related()))
        return NewsLetters.objects.prefetch_related()
    



@api_view(["GET"])
def get_last_letter(request):
    letter = NewsLetters.objects.all().order_by("-record_date")[0]
    serializer = NewsLettersSerializers(letter)
    return Response(serializer.data)



