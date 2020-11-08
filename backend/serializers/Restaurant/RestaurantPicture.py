
from rest_framework import serializers
from ...models import RestaurantPicture

class RestaurantPictureSerializer(serializers.ModelSerializer):
    picture = serializers.FileField(max_length=None, use_url=True, allow_null=True, required=False)

    class Meta:
        model = RestaurantPicture
        fields = ('picture',)