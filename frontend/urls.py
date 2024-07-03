from django.urls import path
from .views import index

# List of URL patterns for routing
urlpatterns = [
    # Route for the root URL, which calls the index view/function
    path("", index),
]
