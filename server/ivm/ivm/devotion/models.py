from django.db import models
from youtube.models import Preacher
from django.utils.text import slugify

# Create your models here.

class Devotion(models.Model):
    audioID = models.CharField(max_length=50, unique = True)
    title = models.CharField(max_length=150, null=True, blank=True)
    link = models.CharField(max_length=150, unique=True, null=True, blank=True)
    preacher = models.ForeignKey(Preacher, on_delete=models.CASCADE, null=True, blank=True)
    thumbNail = models.ImageField(upload_to = "images/", null=True, blank=True)
    excerpt = models.TextField(max_length=250, null=True, blank=True)
    preach_date = models.DateField(null=True, blank=True, db_index=True)


    def __str__(self):
        return self.title



