from django.urls import path
from .views import *

urlpatterns = [
    path('list/', ReviewList.as_view(), name='review_list'),
    path('create/', ReviewCreate.as_view(), name='add_review'),
    path('update/<int:pk>/', ReviewUpdate.as_view(), name='update_review'),
    path('delete/<int:pk>/', ReviewDelete.as_view(), name='delete_review'),
]