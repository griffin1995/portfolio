from rest_framework import serializers
from .models import Room


# Serializer class for the Room model
# This class transforms Room model instances into JSON format and validates input data
class RoomSerializer(serializers.ModelSerializer):
    class Meta:
        # Specify the model that this serializer is associated with
        model = Room
        # Define the fields that will be included in the serialized output and deserialized input
        fields = (
            "id",
            "code",
            "host",
            "guest_can_pause",
            "votes_to_skip",
            "created_at",
        )
