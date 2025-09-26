from django.db import models



#music models

class Subscriptions(models.Model):
    type = models.CharField(max_length=20, null=True, blank=True)
    address = models.CharField(max_length=20, null=True, blank=True, unique=True)
    class Meta:
           indexes = [ 
             models.Index(fields=["type",]),
           ]




class sentMessages(models.Model):
    senderName = models.CharField(max_length=40, null=True, blank=True)
    senderEmail = models.CharField(max_length=40, null=True, blank=True)
    senderPhone = models.CharField(max_length=40, null=True, blank=True)
    message = models.TextField(null=True, blank=True)

    class Meta:
           indexes = [ 
             models.Index(fields=["senderEmail",]),
             models.Index(fields=["senderPhone",]),
           ]



    

