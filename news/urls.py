from django.urls import path
from rest_framework_simplejwt import views as jwt_views
from .views import *


urlpatterns = [
    path('news/list/', NewsList.as_view(), name='news_list'),
    path('news/<slug>/', NewsDetails.as_view(), name='news_details'),
    path('news/types/', NewsTypeList.as_view(), name='news_type'),
    path('news/pictures/', NewsPictureList.as_view(), name='news_pictures'),
]