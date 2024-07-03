from django.shortcuts import render


# This view handles the rendering of the main page of the frontend application.
# It accepts a request object and optional positional and keyword arguments.
# The view returns the rendered "frontend/index.html" template.
def index(request, *args, **kwargs):
    return render(request, "frontend/index.html")
