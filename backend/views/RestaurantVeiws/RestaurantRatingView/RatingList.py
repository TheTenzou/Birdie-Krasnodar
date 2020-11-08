from rest_framework import status, permissions
from rest_framework.response import Response
from rest_framework.views import APIView

from ....serializers import RestaurantRatingSerializer
from ....models import RestaurantRating


class RestaurantRatingList(APIView):
    permission_classes = (permissions.AllowAny,)

    def get(self, request):
        rating = RestaurantRating.objects.all()
        serializer = RestaurantRatingSerializer(rating, many=True)
        return Response(serializer.data)
