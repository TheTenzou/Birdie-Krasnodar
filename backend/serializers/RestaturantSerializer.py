from rest_framework import serializers
from ..models import Restaurant


# Сериалезаторо ресторана
class RestaurantSerializer(serializers.ModelSerializer):

    class Meta:
        model = Restaurant
        fields = ('id', 'description', 'food_type', 'price_bracket', 'card_picture')
