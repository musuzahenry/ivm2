from django.db import models
from django.contrib.auth.models import User



#music models

class Subscriptions(models.Model):
    types = (("email","Email"),("whatsapp", "Whatsapp"))
    type = models.CharField(max_length=40, choices = types, null=True, blank=True)
    address = models.CharField(max_length=50, null=True, blank=True, unique=True)
    class Meta:
           indexes = [ 
             models.Index(fields=["type",]),
           ]




class SentMessages(models.Model):
    address = models.ForeignKey(Subscriptions, on_delete=models.CASCADE)
    details = models.TextField()
    record_date = models.DateTimeField(auto_now_add=True, null=True, blank=True, db_index=True)
    user = models.ForeignKey(User, null=True, blank=True, on_delete=models.CASCADE)




class ReceivedMessages(models.Model):
    senderName = models.CharField(max_length=40, null=True, blank=True)
    senderEmail = models.CharField(max_length=40, null=True, blank=True)
    senderPhone = models.CharField(max_length=40, null=True, blank=True)
    message = models.TextField(null=True, blank=True)
    record_date = models.DateField(null=True, blank=True, auto_now_add=True)

    class Meta:
           indexes = [ 
             models.Index(fields=["senderEmail",]),
             models.Index(fields=["senderPhone",]),
           ]



    

