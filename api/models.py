from django.db import models
import string, random


def generate_unique_code():
    """
    Generate a unique 6-character code consisting of uppercase ASCII letters.
    Continuously generate a new code until it is unique within the Hub model.

    Returns:
        str: A unique 6-character code.
    """
    length = 6
    while True:
        code = "".join(random.choices(string.ascii_uppercase, k=length))
        if Hub.objects.filter(code=code).count() == 0:
            break
    return code


# Ensure models contain business logic, keep views lightweight.
# Define the Hub model with necessary fields.
class Hub(models.Model):
    code = models.CharField(max_length=8, default="", unique=True)  # Unique Hub code
    host = models.CharField(
        max_length=50, unique=True
    )  # Unique identifier for the host
    guest_can_pause = models.BooleanField(
        null=False, default=False
    )  # Whether guests can pause the Hub
    votes_to_skip = models.IntegerField(
        null=False, default=1
    )  # Number of votes required to skip
    created_at = models.DateTimeField(
        auto_now_add=True
    )  # Timestamp for when the Hub is created
