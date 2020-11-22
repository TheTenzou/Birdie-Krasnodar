from rest_framework import status, permissions
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.pagination import PageNumberPagination
from rest_framework.generics import ListAPIView

from ...serializers import NewsShortSerializer
from ...models import News

class NewsList(ListAPIView):
    permission_classes = (permissions.AllowAny,)
    queryset = News.objects.all()
    serializer_class = NewsShortSerializer
    pagination_class = PageNumberPagination

    # def get(self, request, first, last):
    #     news = News.objects.all()[first-1:last]
    #     serializer = NewsShortSerializer(news, many=True, context={"request":request})
    #     return Response(serializer.data)