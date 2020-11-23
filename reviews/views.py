from rest_framework import permissions, status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.generics import ListAPIView
from rest_framework.pagination import PageNumberPagination
from rest_framework.filters import OrderingFilter 

from django_filters import rest_framework as filters

from .serializers import ReviewSerializer, ReviewAllFieldsSerializer
from .models import Review


class ReviewFilters(filters.FilterSet):

    class Meta:
        model = Review
        fields = {
            'restaurant__slug': ['exact'],
            'publication_date': ['exact', 'gte', 'lte'],
            'rating': ['gte', 'lte']
        }

class ReviewList(ListAPIView):
    permission_classes = (permissions.AllowAny,)
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer
    pagination_class = PageNumberPagination
    filter_backends = (OrderingFilter, filters.DjangoFilterBackend)
    filterset_class = ReviewFilters
    ordering_fields = ('publication_date', 'rating')


class ReviewCreate(APIView):
    permission_classes = (permissions.AllowAny,)

    def post(self, request, format='json'):
        serializer = ReviewAllFieldsSerializer(data=request.data)

        if serializer.is_valid():
            review = serializer.save()
            if review:
                return Response(serializer.data, status=status.HTTP_201_CREATED)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ReviewUpdate(APIView):
    permission_classes = (permissions.AllowAny,)

    def post(self, request, pk, format='json'):
        review = Review.objects.get(id=pk)
        serializer = ReviewAllFieldsSerializer(instance=review, data=request.data)

        if serializer.is_valid():
            new_review = serializer.save()
            if new_review:
                json = serializer.data
                return Response(json, status=status.HTTP_200_OK)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class ReviewDelete(APIView):
    permission_classes = (permissions.AllowAny,)

    def delete(self, request, pk):
        if Review.objects.filter(id=pk).exists():
            review = Review.objects.get(id=pk)
            review.delete()
            return Response(status=status.HTTP_200_OK)
        return Response(status=status.HTTP_400_BAD_REQUEST)