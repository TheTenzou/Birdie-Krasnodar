from rest_framework import status, permissions
from rest_framework.response import Response
from rest_framework.views import APIView

from ...serializers import FoodTypeSerializer
from ...models import FoodType

class FoodTypeList(APIView):
    permission_classes = (permissions.AllowAny,)

    def get(self, request):
        address = FoodType.objects.all()
        serializer = FoodTypeSerializer(address, many=True)
        return Response(serializer.data)
