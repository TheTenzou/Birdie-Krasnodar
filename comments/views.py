from rest_framework import permissions, status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.generics import ListAPIView
from rest_framework.pagination import PageNumberPagination
from rest_framework.filters import OrderingFilter

from django_filters import rest_framework as filters

from .serializers import CommentSerializer
from .models import Comment


class CommentFilters(filters.FilterSet):

    class Meta:
        model = Comment
        fields = {
            'news__slug': ['exact'],
            'publication_date': ['exact', 'gte', 'lte']
        }

class CommentList(ListAPIView):
    permission_classes = (permissions.AllowAny,)
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
    pagination_class = PageNumberPagination
    filter_backends = (OrderingFilter, filters.DjangoFilterBackend)
    filterset_class = CommentFilters
    ordering_fields = ('publication_date',)


class CommentsCreate(APIView):
    permission_classes = (permissions.AllowAny,)

    def post(self, request, format='json'):
        serializer = CommentSerializer(data=request.data)

        if serializer.is_valid():
            comment = serializer.save()
            if comment:
                return Response(serializer.data, status=status.HTTP_201_CREATED)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)