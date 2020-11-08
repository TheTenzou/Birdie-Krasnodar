from rest_framework import status, permissions
from rest_framework.response import Response
from rest_framework.views import APIView

from ...serializers import RestaurantDetailSerializer
from ...models import Restaurant


class RestaurantDetails(APIView):
    permission_classes = (permissions.AllowAny,)

    def get(self, request, pk):
        restaurants = Restaurant.objects.get(id=pk)
        serializer = RestaurantDetailSerializer(restaurants, many=False, context={"request":request})
        return Response(serializer.data)
