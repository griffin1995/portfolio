from django.urls import path
from .views import index

# List of URL patterns for routing
urlpatterns = [
    # Route for the root URL, which calls the index view/function
    path("", index),
    # Route for the "/join" URL, which also calls the index view/function
    # These routes allow Django to pass control to React for further routing
    path("join", index),
    # Route for the "/create" URL, which also calls the index view/function
    path("create", index),
]
