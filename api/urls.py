from django.urls import path
from .views import RoomView

# URL configuration for the Django application
# This list routes URLs to the appropriate views
urlpatterns = [
    # Route the "home" URL to the RoomView class-based view
    # When the "home" URL is accessed, the as_view() method of RoomView will be called
    path("room", RoomView.as_view()),
]
