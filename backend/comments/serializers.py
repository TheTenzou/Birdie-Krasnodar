from rest_framework import serializers
from .models import Comment
from users.serializers import UserSerializerLite

class CommentSerializer(serializers.ModelSerializer):
    user = UserSerializerLite(many=False, read_only=True)

    class Meta:
        model = Comment
        fields = ('id', 'user', 'news', 'text','publication_date')