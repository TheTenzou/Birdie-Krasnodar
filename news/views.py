from rest_framework import status, permissions
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.generics import ListAPIView
from rest_framework.pagination import PageNumberPagination

from django_filters import rest_framework as filters

from .serializers import NewsTypeSerializer, NewsPicturesSerializer, NewsShortSerializer, NewsSerializer
from .models import NewsType, NewsPicture, News

class NewsTypeList(APIView):
    permission_classes = (permissions.AllowAny,)

    def get(self, request):
        news = NewsType.objects.all()
        serializer = NewsTypeSerializer(news, many=True, context={"request":request})
        return Response(serializer.data)


class NewsPictureList(APIView):
    permission_classes = (permissions.AllowAny,)

    def get(self, request):
        pictures = NewsPicture.objects.all()
        serializer = NewsPicturesSerializer(pictures, many=True, context={"request":request})
        return Response(serializer.data)


class NewsFildters(filters.FilterSet):

    class Meta:
        model = News
        fields = {
            'news_type': ['exact'],
            'publication_date': ['exact', 'gte', 'lte']
        }


class NewsList(ListAPIView):
    permission_classes = (permissions.AllowAny,)
    queryset = News.objects.all()
    serializer_class = NewsShortSerializer
    pagination_class = PageNumberPagination
    filter_backends = (SearchFilter, OrderingFilter, filters.DjangoFilterBackend)
    filterset_class = NewsFildters
    search_fields = ('headline', 'news_text', 'news_type__name')
    ordering_fields = ('id', 'news_type', 'publication_date')


class NewsDetails(APIView):
    permission_classes = (permissions.AllowAny,)

    def get(self, request, slug):
        news = News.objects.get(slug=slug)
        serializer = NewsSerializer(news, many=False, context={"request":request})
        return Response(serializer.data)