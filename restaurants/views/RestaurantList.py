from rest_framework import status, permissions
from rest_framework.pagination import PageNumberPagination
from rest_framework.generics import ListAPIView
from rest_framework.filters import SearchFilter, OrderingFilter

from django_filters import rest_framework as filters

from ..serializers import RestaurantSerializer 
from ..models import Restaurant

class RestaurntFilters(filters.FilterSet):

    class Meta:
        model = Restaurant
        fields = {
            'food_type': ['exact'],
            'price_bracket': ['exact'],
        }

class RestaurantList(ListAPIView):
    permission_classes = (permissions.AllowAny,)
    queryset = Restaurant.objects.all()
    authentication_classes = ()
    serializer_class = RestaurantSerializer
    pagination_class = PageNumberPagination
    filter_backends = (SearchFilter, OrderingFilter, filters.DjangoFilterBackend)
    filterset_class = RestaurntFilters
    search_fields = ('name', 'description', 'food_type__name', 'price_bracket__name')
    ordering_fields = ('id', 'food_type', 'price_bracket')
