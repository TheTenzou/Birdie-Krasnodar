from rest_framework import status, permissions
from rest_framework.response import Response
from rest_framework.views import APIView

from ...serializers import NewsSerializer, NewsShortSerializer
from ...models import News

class NewsDetails(APIView):
    permission_classes = (permissions.AllowAny,)

    def get(self, request, pk):
        news = News.objects.get(id=pk)
        serializer = NewsShortSerializer(news, many=False, context={"request":request})
        return Response(serializer.data)