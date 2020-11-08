from rest_framework import status, permissions
from rest_framework.response import Response
from rest_framework.views import APIView

from ...serializers import NewsShortSerializer
from ...models import News

class NewsList(APIView):
    permission_classes = (permissions.AllowAny,)

    def get(self, request):
        news = News.objects.all()
        serializer = NewsShortSerializer(news, many=True, context={"request":request})
        return Response(serializer.data)