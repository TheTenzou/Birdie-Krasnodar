from rest_framework import status, permissions
from rest_framework.response import Response
from rest_framework.views import APIView

from ...serializers import RestaurantSerializer, RestaurantDetailSerializer
from ...models import Restaurant


class RestaurantList(APIView):
    permission_classes = (permissions.AllowAny,)

    def get(self, request):
        restaurants = Restaurant.objects.all()
        serializer = RestaurantDetailSerializer(restaurants, many=True, context={"request":request})
        return Response(serializer.data)
