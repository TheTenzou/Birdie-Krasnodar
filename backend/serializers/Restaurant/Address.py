from rest_framework import serializers
from ...models import Address


class AddressSerializer(serializers.ModelSerializer):

    class Meta:
        model = Address
        fields = ('id', 'address', 'coordinates')
        # fields = ('id','restaurant', 'coordinates')
        # fields = ('id', 'coordinates')
        # fields = ('id', )
        # fields = '__all__'