from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework import serializers
from .models import User, Restaurant, Price_bracket, Food_type


# Сериалезатор для пользователя
class UserSerialier(serializers.ModelSerializer):

    email = serializers.EmailField(
        required=True
    )
    username = serializers.CharField()
    password = serializers.CharField(min_length=8, write_only=True)

    class Meta:
        model = User
        fields = ('email', 'username', 'password')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)  # TODO redo
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance


# Сериализатор ценовых категорий
class PriceBracketSerializer(serializers.ModelSerializer):

    class Meta:
        model = Price_bracket
        field = ('id', 'name')


# Сериализатор типов еды
class FoodTypeSerializer(serializers.ModelSerializer):

    class Meta:
        model = Food_type
        fields = ('id', 'name')

# Сериалезаторо ресторана
class RestaurantSerializer(serializers.ModelSerializer):

    class Meta:
        model = Restaurant
        fields = ('id', 'description', 'food_type', 'price_bracket', 'card_picture')
