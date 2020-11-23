from django.urls import path
from rest_framework_simplejwt import views as jwt_views
from .views import *


urlpatterns = [


    path('restaurant/list/', RestaurantList.as_view(), name='restaurant_list'),
    path('restaurant/<slug>/', RestaurantDetails.as_view(), name='restaurant_detail'),

    path('restaurant/rating/list/', RestaurantRatingList.as_view(), name='restaurant_rating_list'),
    path('restaurant/rating/add/', RestaurnatRatingCreate.as_view(), name='restauratn_rating_add'),
    path('restaurant/rating/update/<int:pk>/', RestaurantRatingUpdate.as_view(), name='restauratn_rating_update'),
    path('restaurant/rating/delete/<int:pk>/', RestaurantRatingDelete.as_view(), name='restauratn_rating_delete'),

    # path('restaurant/address/<int:restaurantId>/', AddressList.as_view(), name='address_list'),
    # path('restaurant/pictures_restaurant/<int:restaurantId>/', RestaurantPictureList.as_view(), name='restuarant_pictures'),
    # path('restaurant/pictures_food/<int:restaurantId>/', FoodPicturesList.as_view(), name='food_pictures'),

    path('restaurant/food_type/', FoodTypeList.as_view(), name='food_type'),
    path('restaurant/price_bracket/', PriceBracketList.as_view(), name='price_bracket'),
]