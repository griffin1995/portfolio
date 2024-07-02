from django.shortcuts import render
from django.http import HttpResponse


# Define your views here.
def main(request):
    """
    Handle the request and return a simple HTTP response with the text "TEST".

    Args:
        request (HttpRequest): The request object used to generate the response.

    Returns:
        HttpResponse: An HTTP response object containing the text "TEST".
    """
    return HttpResponse("TEST")
