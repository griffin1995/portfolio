from django.shortcuts import render
from rest_framework import generics
from .serializers import HubSerializer
from .models import Hub


# This view handles HTTP GET requests to list all Hub instances
# It uses Django REST framework's ListAPIView for handling the request
class HubView(generics.ListAPIView):
    # Define the queryset to specify the data this view will operate on
    queryset = Hub.objects.all()
    # Define the serializer class to be used for validating and deserializing input,
    # as well as serializing output
    serializer_class = HubSerializer
