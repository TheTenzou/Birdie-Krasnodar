from rest_framework.views import APIView
from rest_framework import status, permissions
from rest_framework.response import Response

from .serializers import UserSerializer, UserDetailSerializer
from .models import User

class UserCreate(APIView):
    permission_classes = (permissions.AllowAny,)

    def post(self, request, format='json'):
        username = request.data.get('username')
        if User.objects.filter(username=username).count != 0:
            return Response({"username": "already exist"},status=status.HTTP_400_BAD_REQUEST)
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            if user:
                json = serializer.data
                return Response(json, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class UserDetails(APIView):
    permission_classes = (permissions.AllowAny,)

    def get(self, request, pk):
        user = User.objects.get(id=pk)
        serializer = UserDetailSerializer(user, many=False)
        return Response(serializer.data, status=status.HTTP_200_OK)


class UserUpdate(APIView):
    permission_classes = (permissions.AllowAny,)

    def post(self, request, pk, format='json'):
        username = request.data.get('username')
        if User.objects.filter(username=username).count != 0:
            return Response({"username": "already exist"},status=status.HTTP_400_BAD_REQUEST)
            
        user = User.objects.get(id=pk)
        serializer = UserDetailSerializer(instance=user, data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            if user:
                json = serializer.data
                return Response(json, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)