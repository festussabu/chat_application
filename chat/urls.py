from django.urls import path
from .views import *

urlpatterns = [
    path('api/rooms/', get_rooms),
    path('api/rooms/add/', add_room),
    path('api/rooms/<int:id>/messages/', message),
    path('api/user/register', register),
    path('api/user/login', login),
]
