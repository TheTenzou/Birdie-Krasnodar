from rest_framework import serializers
from ...models import NewsPicture


class NewsPicturesSerializer(serializers.ModelSerializer):
    picture = serializers.FileField(max_length=None, use_url=True, allow_null=True, required=False)

    class Meta:
        model = NewsPicture
        fields = ('picture',)