from .models import Message, Room
from django.contrib.auth.models import User
from .serializers import MessageSerializer, RoomSerializer, UserSerializer, RegisterSerializer
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_rooms(request):
    rooms = Room.objects.all()
    serializer = RoomSerializer(rooms, many = True)
    return Response(serializer.data)

@api_view(['POST'])
def add_room(request):
    serializer = RoomSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)

@api_view(['GET', 'POST'])
def message(request, id):
    if request.method == 'GET':
        messages = Message.objects.filter(room = id)
        serializer = MessageSerializer(messages, many = True)
        return Response(serializer.data)

    if request.method == 'POST':
        serializer = MessageSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(room_id = id, send_by = request.user)
            return Response(serializer.data)
        else:
            return Response(serializer.errors)
    

@api_view(['POST'])
def register(request):
    serializer = RegisterSerializer(data=request.data)
    if serializer.is_valid():
        user = serializer.save() 
        return Response(
            {
                "message":"User Created!",
                "data":RegisterSerializer(user).data
             }, 
            status=status.HTTP_201_CREATED
        )
    else:
        return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)

    
