from rest_framework import status, permissions
from rest_framework.pagination import PageNumberPagination
from rest_framework.generics import ListAPIView
from rest_framework.filters import SearchFilter, OrderingFilter

from django_filters import rest_framework as filters

from ...serializers import NewsShortSerializer
from ...models import News

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