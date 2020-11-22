from rest_framework import serializers
from ...models import News


class NewsShortSerializer(serializers.ModelSerializer):
    card_picture = serializers.FileField(max_length=None, use_url=True, allow_null=True, required=False)

    class Meta:
        model = News
        fields = ['id', 'headline', 'publication_date', 'news_type', 'card_picture', 'slug']


class NewsSerializer(serializers.ModelSerializer):
    card_picture = serializers.FileField(max_length=None, use_url=True, allow_null=True, required=False)

    class Meta:
        model = News
        # fields = ['id', 'headline', 'news_text', 'publication_date', 'news_type', 'card_picture']
        fields = ['id', 'news_text', 'publication_date', 'news_type', 'card_picture', 'slug']