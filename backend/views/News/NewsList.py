from rest_framework import status, permissions
from rest_framework.response import Response
from rest_framework.views import APIView

from ...serializers import NewsShortSerializer
from ...models import News

class NewsList(APIView):
    permission_classes = (permissions.AllowAny,)

    def get(self, request):
        news = News.objects.all()
        t = list(news)
        for tt in t:
            print(tt)
            print(tt.id)
            print(tt.headline)

        print('===================================================================================================')
        serializer = NewsShortSerializer(news, many=True, context={"request":request})
        return Response(serializer.data)