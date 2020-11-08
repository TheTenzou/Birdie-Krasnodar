from rest_framework import status, permissions
from rest_framework.response import Response
from rest_framework.views import APIView

from ...serializers import NewsPicturesSerializer
from ...models import NewsPicture


class NewsPictureList(APIView):
    permission_classes = (permissions.AllowAny,)

    def get(self, request):
        pictures = NewsPicture.objects.all()
        serializer = NewsPicturesSerializer(pictures, many=True, context={"request":request})
        return Response(serializer.data)