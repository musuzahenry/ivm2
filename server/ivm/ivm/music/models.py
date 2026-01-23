from django.db import models



class Artist(models.Model):
    artistName = models.CharField(max_length=40, null=True, blank=True)
    image = models.ImageField(null=True, blank=True, upload_to="artists")

    class Meta:
           indexes = [ 
             models.Index(fields=["artistName",]),
           ]




class Concert(models.Model):
      desc = models.TextField(null=True, blank=True)
      record_date = models.DateField(null=True, blank=True)




class MusicList(models.Model):
     artistID = models.ForeignKey(Artist, related_name="music", on_delete = models.CASCADE, null=True, blank=True)
     concertID = models.ForeignKey(Concert, related_name="music", on_delete=models.CASCADE, null=True, blank=True)
     songTitle = models.CharField(max_length=40, null=True, blank=True)
     genre = models.CharField(max_length=20, null=True, blank=True)
     lyrics = models.TextField(null=True, blank=True)
     audioUrl = models.CharField(max_length=120, null=True, blank=True)
     videoUrl = models.CharField(max_length=120, null=True, blank=True)


     class Meta:
           indexes = [ 
             models.Index(fields=["songTitle",]),
           ]