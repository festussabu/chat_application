from django.db import models
from django.contrib.auth.models import User
# Create your models here.
class Room(models.Model):
    name = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return self.name
    

class Message(models.Model):
    text = models.TextField()
    room = models.ForeignKey(Room, on_delete=models.CASCADE)
    send_by = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    send_time= models.DateTimeField(auto_now_add=True)
