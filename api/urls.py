from django.urls import path
from .views import main

# Define URL patterns for the Django application
urlpatterns = [
    # Map the "home" URL to the 'main' view function
    path("home", main),
    # Map the root URL to the 'main' view function
    path("", main),
]
