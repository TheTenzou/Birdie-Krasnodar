from rest_framework import serializers
from ..models import RestaurantRating

class RestaurantRatingSerializer(serializers.ModelSerializer):

    class Meta:
        model = RestaurantRating
        fields = '__all__'