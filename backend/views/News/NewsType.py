from rest_framework import status, permissions
from rest_framework.response import Response
from rest_framework.views import APIView

from ...serializers import NewsTypeSerializer
from ...models import NewsType

class NewsTypeList(APIView):
    permission_classes = (permissions.AllowAny,)

    def get(self, request):
        news = NewsType.objects.all()
        serializer = NewsTypeSerializer(news, many=True, context={"request":request})
        return Response(serializer.data)
