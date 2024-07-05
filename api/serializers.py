from rest_framework import serializers
from .models import Hub


# Serializer class for the Hub model
# This class transforms Hub model instances into JSON format and validates input data
class HubSerializer(serializers.ModelSerializer):
    class Meta:
        # Specify the model that this serializer is associated with
        model = Hub
        # Define the fields that will be included in the serialized output and deserialized input
        fields = (
            "id",
            "code",
            "host",
            "guest_can_pause",
            "votes_to_skip",
            "created_at",
        )
