from django.urls import path
from rest_framework_simplejwt import views as jwt_views
from .views import *


urlpatterns = [
    path('create/', UserCreate.as_view(), name='create_user'),
    path('detail/<int:pk>/', UserDetails.as_view(), name='user_deteils'),
    path('update/<int:pk>/', UserUpdate.as_view(), name='update_user'),
    path('token/obtain/', jwt_views.TokenObtainPairView.as_view(), name='token_create'),  # override sjwt stock token
    path('token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
]