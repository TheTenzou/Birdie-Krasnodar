from rest_framework import status, permissions
from rest_framework.response import Response
from rest_framework.views import APIView

from ....serializers import RestaurantRatingSerializer
from ....models import RestaurantRating


class RestaurantRatingDelete(APIView):
    permission_classes = (permissions.AllowAny,)

    def delete(self, request, pk):
        if RestaurantRating.objects.filter(id=pk).exists():
            rating = RestaurantRating.objects.get(id=pk)
            rating.delete()
            return Response(status=status.HTTP_200_OK)
        return Response(status=status.HTTP_400_BAD_REQUEST)
