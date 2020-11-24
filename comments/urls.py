from django.urls import path
from .views import *

urlpatterns = [
    path('list/', CommentList.as_view(), name='comments_list'),
    path('create/', CommentsCreate.as_view(), name='create_list'),
]
