from django.shortcuts import render
from rest_framework import generics
from .serializers import RoomSerializer
from .models import Room


# This view handles HTTP GET requests to list all Room instances
# It uses Django REST framework's ListAPIView for handling the request
class RoomView(generics.ListAPIView):
    # Define the queryset to specify the data this view will operate on
    queryset = Room.objects.all()
    # Define the serializer class to be used for validating and deserializing input,
    # as well as serializing output
    serializer_class = RoomSerializer
