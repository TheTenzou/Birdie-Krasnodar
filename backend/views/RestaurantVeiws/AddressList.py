from rest_framework import status, permissions
from rest_framework.response import Response
from rest_framework.views import APIView

from ...serializers import AddressSerializer
from ...models import Address

class AddressList(APIView):
    permission_classes = (permissions.AllowAny,)

    def get(self, request, restaurantId):
        address = Address.objects.filter(restaurant=restaurantId)
        serializer = AddressSerializer(address, many=True)
        return Response(serializer.data)