from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Room, Message

class RoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Room
        fields = ['id', 'name', 'created_at']

class MessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Message
        exclude = ['send_by']

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username']
