from rest_framework import status, permissions
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.pagination import PageNumberPagination
from rest_framework.generics import ListAPIView

from ...serializers import RestaurantSerializer, RestaurantDetailSerializer
from ...models import Restaurant


class RestaurantList(ListAPIView):
    permission_classes = (permissions.AllowAny,)
    queryset = Restaurant.objects.all()
    serializer_class = RestaurantDetailSerializer
    pagination_class = PageNumberPagination
