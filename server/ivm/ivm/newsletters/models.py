from django.db import models
from youtube.models import Preacher

# Create your models here.

class NewsLetters(models.Model):
    file = models.FileField(upload_to = "files")
    title = models.CharField(max_length=100)
    record_date = models.DateField(null=True, blank=True, db_index = True)
    excerpt = models.CharField(max_length=255, null=True, blank=True)
    thumb_nail = models.ImageField(upload_to = "images", null=True, blank=True)
    author = models.ForeignKey(Preacher, related_name="newsletters", null=True, blank=True, on_delete=models.CASCADE)