from rest_framework import status, permissions
from rest_framework.response import Response
from rest_framework.views import APIView

from ...serializers import RestaurantPictureSerializer
from ...models import RestaurantPicture

class RestaurantPictureList(APIView):
    permission_classes = (permissions.AllowAny,)

    def get(self, request, restaurantId):
        pictures = RestaurantPicture.objects.filter(restaurant=restaurantId)
        serializer = RestaurantPictureSerializer(pictures, many=True)
        return Response(serializer.data)