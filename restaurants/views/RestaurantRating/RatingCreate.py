from rest_framework import status, permissions
from rest_framework.response import Response
from rest_framework.views import APIView

from ...serializers import RestaurantRatingSerializer
from ...models import RestaurantRating


class RestaurnatRatingCreate(APIView):
    permission_classes = (permissions.AllowAny,)

    def post(self, request, fromat='json'):
        serializer = RestaurantRatingSerializer(data=request.data)
        
        if serializer.is_valid():
            rating = serializer.save()
            if rating:
                return Response(serializer.data, status=status.HTTP_201_CREATED)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
