from django.urls import path
from rest_framework_simplejwt import views as jwt_views
from .views import *
from .views import FoodTypeList

urlpatterns = [
    path('rating/list/', RestaurantRatingList.as_view(), name='restaurant_rating_list'),
    path('rating/add/', RestaurnatRatingCreate.as_view(), name='restauratn_rating_add'),
    path('rating/update/<int:pk>/', RestaurantRatingUpdate.as_view(), name='restauratn_rating_update'),
    path('rating/delete/<int:pk>/', RestaurantRatingDelete.as_view(), name='restauratn_rating_delete'),

    # path('restaurant/address/<int:restaurantId>/', AddressList.as_view(), name='address_list'),
    # path('restaurant/pictures_restaurant/<int:restaurantId>/', RestaurantPictureList.as_view(), name='restuarant_pictures'),
    # path('restaurant/pictures_food/<int:restaurantId>/', FoodPicturesList.as_view(), name='food_pictures'),

    path('food_type/', FoodTypeList.as_view(), name='food_type'),
    path('price_bracket/', PriceBracketList.as_view(), name='price_bracket'),

    path('list/', RestaurantList.as_view(), name='restaurant_list'),
    path('<slug>/', RestaurantDetails.as_view(), name='restaurant_detail'),
]