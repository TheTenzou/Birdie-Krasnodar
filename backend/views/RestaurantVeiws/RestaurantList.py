from rest_framework import status, permissions
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.pagination import PageNumberPagination
from rest_framework.generics import ListAPIView
from rest_framework.filters import SearchFilter, OrderingFilter

from ...serializers import RestaurantSerializer, RestaurantDetailSerializer
from ...models import Restaurant


class RestaurantList(ListAPIView):
    permission_classes = (permissions.AllowAny,)
    queryset = Restaurant.objects.all()
    serializer_class = RestaurantSerializer
    pagination_class = PageNumberPagination
    filter_backends = (SearchFilter, OrderingFilter)
    search_fields = ('name', 'description', 'food_type__name', 'price_bracket__name')
