from django.urls import path
from rest_framework_simplejwt import views as jwt_views
from .views import *


urlpatterns = [
    path('list/', NewsList.as_view(), name='news_list'),
    path('types/', NewsTypeList.as_view(), name='news_type'),
    path('pictures/', NewsPictureList.as_view(), name='news_pictures'),
    path('<slug>/', NewsDetails.as_view(), name='news_details'),
]