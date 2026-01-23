from django.db import models

# Create your models here.


class mission(models.Model):
    location = models.CharField(max_length=50, null=True, blank = True)
    title = models.CharField(max_length=100, null=True, blank = True)
    description = models.TextField(null=True, blank=True)
    start_date_time = models.DateField(null=True, blank=True)
    end_date_time = models.DateField(null=True, blank=True)
    banner_image = models.ImageField(upload_to="images", null=True, blank=True)
    image2 = models.ImageField(upload_to="images", null=True, blank=True)
    image3 = models.ImageField(upload_to="images", null=True, blank=True)
    image4 = models.ImageField(upload_to="images", null=True, blank=True)
    
