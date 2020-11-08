from rest_framework import serializers
from ..models import FoodType


# Сериализатор типов еды
class FoodTypeSerializer(serializers.ModelSerializer):

    class Meta:
        model = FoodType
        fields = ('id', 'name')
