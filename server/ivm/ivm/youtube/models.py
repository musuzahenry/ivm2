from django.db import models
from django.utils.text import slugify


class SermonSeries(models.Model):
    sermonTitle = models.CharField(max_length=100)
    date_started = models.DateField(auto_now_add=True, null=True, blank=True)




class Preacher(models.Model):
    preacherName = models.CharField(max_length=50, null=True, blank=True)
    origin = models.CharField(max_length=50, null=True, blank=True)
    img = models.ImageField(upload_to="images", null=True, blank=True)
    imgThumbnail = models.ImageField(upload_to="images", null=True, blank=True)

    def __str__(self):
        return self.preacherName




class Sermons(models.Model):
    sermonSeriesID = models.ForeignKey(SermonSeries, related_name="sermons", on_delete=models.CASCADE, null=True, blank=True)
    preacherID = models.ForeignKey(Preacher, related_name="sermons", on_delete=models.CASCADE, null=True, blank=True)
    sermonTitle = models.CharField(max_length=100, null=True, blank=True)
    slug = models.CharField(max_length=150, null=True, blank=True, unique=True)
    sermonExcept = models.TextField(max_length=252, null=True, blank=True)
    sermonLink = models.CharField(max_length=100, unique=True)
    audioLink = models.CharField(max_length=150, unique=True, null=True, blank=True)
    sermonCode = models.CharField(max_length=50, unique=True)
    dateTimePreached = models.DateField(null=True, blank=True)

    def save(self, *args, **kwargs):

        if not self.slug:
            self.slug = slugify(self.sermonTitle)
            unique_slug = self.slug
            counter = 1

            while check_slug(self.slug):
                unique_slug = f'{self.slug}-{counter}'
                counter += 1
                self.slug = unique_slug
               
        super().save(*args, **kwargs)
    

    def __str__(self):
        return self.sermonTitle


#check uniqueness of lugs
def check_slug(slug):
    if Sermons.objects.filter(slug = slug).exists():
        return True
    else:
        return False



