from rest_framework import status, permissions
from rest_framework.response import Response
from rest_framework.views import APIView

from ...serializers import RestaurantRatingSerializer
from ...models import RestaurantRating


class RestaurantRatingUpdate(APIView):
    permission_classes = (permissions.AllowAny,)

    def post(self, request, pk, fromat='json'):
        rating = RestaurantRating.objects.get(id=pk)
        serializer = RestaurantRatingSerializer(instance=rating, data=request.data)

        if serializer.is_valid():
            new_rating = serializer.save()
            if new_rating:
                json = serializer.data                
                return Response(json, status=status.HTTP_200_OK)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
