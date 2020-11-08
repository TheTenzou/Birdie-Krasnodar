from rest_framework import serializers
from ...models import FoodPicture

class FoodPictureSerializer(serializers.ModelSerializer):
    picture = serializers.FileField(max_length=None, use_url=True, allow_null=True, required=False)

    class Meta:
        model = FoodPicture
        fields = ('picture',)
