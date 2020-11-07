from rest_framework import serializers
from ..models import PriceBracket


# Сериализатор ценовых категорий
class PriceBracketSerializer(serializers.ModelSerializer):

    class Meta:
        model = PriceBracket
        field = ('id', 'name')
