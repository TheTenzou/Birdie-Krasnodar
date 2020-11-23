from rest_framework import serializers
from .models import Review

class ReviewSerializer(serializers.ModelSerializer):
    up_votes = serializers.SerializerMethodField()
    down_votes = serializers.SerializerMethodField()

    class Meta:
        model = Review
        fields = ('id', 'headline', 'text', 'publication_date', 'rating', 'user', 'up_votes', 'down_votes')

    def get_up_votes(self, obj):
        return Review.objects.get(id=obj.id).up_vote_users.count()
    
    def get_down_votes(self, obj):
        return Review.objects.get(id=obj.id).down_vote_users.count()
    

class ReviewAllFieldsSerializer(serializers.ModelSerializer):

    class Meta:
        model = Review
        fields = '__all__'