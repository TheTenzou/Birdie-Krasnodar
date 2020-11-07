from django.urls import path
from rest_framework_simplejwt import views as jwt_views
from .views import *


urlpatterns = [
    path('user/create/', UserCreate.as_view(), name='create_user'),
    path('token/obtain/', jwt_views.TokenObtainPairView.as_view(), name='token_create'),  # override sjwt stock token
    path('token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),

    path('restaurant/list/', RestaurantList.as_view(), name='restaurant_list'),
    path('restaurant/<str:pk>/', RestaturntDetail.as_view(), name='restaurant_detail'),

    path('restaurant/rating/list/', RestaurantRatingList.as_view(), name='restaurant_rating_list'),
    path('restaurant/rating/add/', RestaurnatRatingCreate.as_view(), name='restauratn_rating_add'),
    path('restaurant/rating/update/<str:pk>/', RestaurantRatingUpdate.as_view(), name='restauratn_rating_update'),
    path('restaurant/rating/delete/<str:pk>/', RestaurantRatingDelete.as_view(), name='restauratn_rating_delete'),
]