from rest_framework import status, permissions
from rest_framework.response import Response
from rest_framework.views import APIView

from ...serializers import NewsSerializer
from ...models import News

class NewsDetails(APIView):
    permission_classes = (permissions.AllowAny,)

    def get(self, request, slug):
        news = News.objects.get(slug=slug)
        serializer = NewsSerializer(news, many=False, context={"request":request})
        return Response(serializer.data)