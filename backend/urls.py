from django.urls import path
from rest_framework_simplejwt import views as jwt_views
from .views import *


urlpatterns = [
    path('user/create/', UserCreate.as_view(), name='create_user'),

    path('token/obtain/', jwt_views.TokenObtainPairView.as_view(), name='token_create'),  # override sjwt stock token
    path('token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),

    path('restaurant/list/', RestaurantList.as_view(), name='restaurant_list'),
    path('restaurant/by_id/<str:pk>/', RestaurantDetails.as_view(), name='restaurant_detail'),

    path('restaurant/rating/list/', RestaurantRatingList.as_view(), name='restaurant_rating_list'),
    path('restaurant/rating/add/', RestaurnatRatingCreate.as_view(), name='restauratn_rating_add'),
    path('restaurant/rating/update/<str:pk>/', RestaurantRatingUpdate.as_view(), name='restauratn_rating_update'),
    path('restaurant/rating/delete/<str:pk>/', RestaurantRatingDelete.as_view(), name='restauratn_rating_delete'),

    path('restaurant/address/<str:restaurantId>/', AddressList.as_view(), name='address_list'),
    path('restaurant/pictures_restaurant/<str:restaurantId>/', RestaurantPictureList.as_view(), name='restuarant_pictures'),
    path('restaurant/pictures_food/<str:restaurantId>/', FoodPicturesList.as_view(), name='food_pictures'),

    path('restaurant/food_type/', FoodTypeList.as_view(), name='food_type'),
    path('restaurant/price_bracket/', PriceBracketList.as_view(), name='price_bracket'),
]