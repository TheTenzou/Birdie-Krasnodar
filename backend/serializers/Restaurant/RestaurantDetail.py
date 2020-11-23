from rest_framework import serializers
from ...models import Restaurant, RestaurantRating
from .PriceBracket import PriceBracketSerializer
from .FoodType import FoodTypeSerializer
from .Address import AddressSerializer
from .RestaurantPicture import RestaurantPictureSerializer
from .FoodPictures import FoodPictureSerializer

# Сериалезаторо ресторана
class RestaurantDetailSerializer(serializers.ModelSerializer):
    price_bracket = PriceBracketSerializer(many=False, read_only=True)
    food_type = FoodTypeSerializer(many=True, read_only=True)
    card_picture = serializers.FileField(max_length=None, use_url=True, allow_null=True, required=False)
    rating = serializers.SerializerMethodField()
    address = AddressSerializer(many=True, read_only=True)
    restaurant_pictures = RestaurantPictureSerializer(many=True, read_only=True)
    food_pictures = FoodPictureSerializer(many=True, read_only=True)
    
    class Meta:
        model = Restaurant
        fields = ['id', 'name', 'description', 'food_type', 'price_bracket', 'card_picture', 'rating', 'address', 'restaurant_pictures', 'food_pictures']
    
    def get_rating(self, obj):
        ratings = list(RestaurantRating.objects.filter(restaurant=obj.id))

        summ = 0
        for rating in ratings:
            summ += rating.rating
        if len(ratings) == 0:
            return 0
        return summ / len(ratings)
