from rest_framework import serializers
from ..models import Restaurant, RestaurantRating
from ..serializers import *
from .RestaurantPicture import RestaurantPictureSerializer

# Сериалезаторо ресторана
class RestaurantSerializer(serializers.ModelSerializer):
    price_bracket = PriceBracketSerializer(many=False, read_only=True)
    food_type = FoodTypeSerializer(many=True, read_only=True)
    card_picture = serializers.FileField(max_length=None, use_url=True, allow_null=True, required=False)
    rating = serializers.SerializerMethodField()

    class Meta:
        model = Restaurant
        fields = ('id', 'description', 'food_type', 'price_bracket', 'card_picture', 'rating', 'restaurant_pictures')
    
    def get_rating(self, obj):
        ratings = list(RestaurantRating.objects.filter(restaurant=obj.id))

        summ = 0
        for rating in ratings:
            summ += rating.rating
        return summ / len(ratings)