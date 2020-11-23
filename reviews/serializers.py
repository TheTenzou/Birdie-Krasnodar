from rest_framework import serializers
from .models import Review, ReviewVote

class ReviewSerializer(serializers.ModelSerializer):
    up_votes = serializers.SerializerMethodField()
    down_votes = serializers.SerializerMethodField()

    class Meta:
        model = Review
        fields = ('id', 'headline', 'text', 'publication_date', 'rating', 'user', 'up_votes', 'down_votes')

    def get_up_votes(self, obj):
        return ReviewVote.objects.filter(review=obj.id, positive=True).count()
    
    def get_down_votes(self, obj):
        return ReviewVote.objects.filter(review=obj.id, positive=False).count()
    

class ReviewAllFieldsSerializer(serializers.ModelSerializer):

    class Meta:
        model = Review
        fields = '__all__'

class ReviewVoteSerializer(serializers.ModelSerializer):

    class Meta:
        model = ReviewVote
        fields = '__all__'