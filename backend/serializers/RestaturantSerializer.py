from rest_framework import serializers
from ..models import Restaurant
from ..serializers import PriceBracketSerializer, FoodTypeSerializer

# Сериалезаторо ресторана
class RestaurantSerializer(serializers.ModelSerializer):
    price_bracket = PriceBracketSerializer(many=False, read_only=True)
    food_type = FoodTypeSerializer(many=True, read_only=True)
    card_picture = serializers.FileField(max_length=None, use_url=True, allow_null=True, required=False)

    class Meta:
        model = Restaurant
        fields = ('id', 'description', 'food_type', 'price_bracket', 'card_picture')
