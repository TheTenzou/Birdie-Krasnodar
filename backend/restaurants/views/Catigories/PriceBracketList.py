
from rest_framework import status, permissions
from rest_framework.response import Response
from rest_framework.views import APIView

from ...serializers import PriceBracketSerializer
from ...models import PriceBracket

class PriceBracketList(APIView):
    permission_classes = (permissions.AllowAny,)

    def get(self, request):
        address = PriceBracket.objects.all()
        serializer = PriceBracketSerializer(address, many=True)
        return Response(serializer.data)
