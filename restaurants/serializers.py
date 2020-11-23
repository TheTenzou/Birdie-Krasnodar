from rest_framework import serializers
from .models import Address, FoodPicture, FoodType, PriceBracket, RestaurantPicture, RestaurantRating, Restaurant


class AddressSerializer(serializers.ModelSerializer):

    class Meta:
        model = Address
        fields = ('id', 'address', 'coordinates')


class FoodPictureSerializer(serializers.ModelSerializer):
    picture = serializers.FileField(max_length=None, use_url=True, allow_null=True, required=False)

    class Meta:
        model = FoodPicture
        fields = ('picture',)


class FoodTypeSerializer(serializers.ModelSerializer):

    class Meta:
        model = FoodType
        fields = ('id', 'name')


class PriceBracketSerializer(serializers.ModelSerializer):

    class Meta:
        model = PriceBracket
        fields = ('id', 'name')


class RestaurantPictureSerializer(serializers.ModelSerializer):
    picture = serializers.FileField(max_length=None, use_url=True, allow_null=True, required=False)

    class Meta:
        model = RestaurantPicture
        fields = ('picture',)


class RestaurantRatingSerializer(serializers.ModelSerializer):

    class Meta:
        model = RestaurantRating
        fields = '__all__'


# Сериалезаторо ресторана
class RestaurantSerializer(serializers.ModelSerializer):
    price_bracket = PriceBracketSerializer(many=False, read_only=True)
    food_type = FoodTypeSerializer(many=True, read_only=True)
    card_picture = serializers.FileField(max_length=None, use_url=True, allow_null=True, required=False)
    rating = serializers.SerializerMethodField()

    class Meta:
        model = Restaurant
        fields = ['id', 'description', 'food_type', 'price_bracket', 'card_picture', 'rating', 'slug']
    
    def get_rating(self, obj):
        ratings = list(RestaurantRating.objects.filter(restaurant=obj.id))

        summ = 0
        for rating in ratings:
            summ += rating.rating
        if len(ratings) == 0:
            return 0
        return summ / len(ratings)


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