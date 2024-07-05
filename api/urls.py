from django.urls import path
from .views import HubView

# URL configuration for the Django application
# This list routes URLs to the appropriate views
urlpatterns = [
    # Route the "home" URL to the HubView class-based view
    # When the "home" URL is accessed, the as_view() method of HubView will be called
    path("hub", HubView.as_view()),
]
