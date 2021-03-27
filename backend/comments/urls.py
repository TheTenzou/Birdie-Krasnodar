from django.urls import path
from .views import *

urlpatterns = [
    path('list/', CommentList.as_view(), name='comments_list'),
    path('create/', CommentCreate.as_view(), name='create_list'),
    path('update/<int:pk>/', CommentUpdate.as_view(), name='update_comment'),
    path('delete/<int:pk>/', CommentDelete.as_view(), name='delete_comment')
]
