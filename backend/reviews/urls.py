from django.urls import path
from .views import *

urlpatterns = [
    path('list/', ReviewList.as_view(), name='review_list'),
    path('create/', ReviewCreate.as_view(), name='add_review'),
    path('update/<int:pk>/', ReviewUpdate.as_view(), name='update_review'),
    path('delete/<int:pk>/', ReviewDelete.as_view(), name='delete_review'),
    path('vote/create/', ReviewVoteCreate.as_view(), name='create_vote'),
    path('vote/update/<int:review>/<int:user>/', ReviewVoiteUpdate.as_view(), name='update_vote'),
    path('vote/delete/<int:review>/<int:user>/', ReviewVoteDelete.as_view(), name='delete_vote'),
]
