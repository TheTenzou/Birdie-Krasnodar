
from rest_framework import status, permissions
from rest_framework.response import Response
from rest_framework.views import APIView

from ...serializers import FoodPictureSerializer
from ...models import FoodPicture

class FoodPicturesList(APIView):
    permission_classes = (permissions.AllowAny,)

    def get(self, request, restaurantId):
        pictures = FoodPicture.objects.filter(restaurant=restaurantId)
        serializer = FoodPictureSerializer(pictures, many=True)
        return Response(serializer.data)