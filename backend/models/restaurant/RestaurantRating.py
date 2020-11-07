from django.db import models


# Оценки пользователей
class RestaurantRating(models.Model):
    # ресторан
    restaurant = models.ForeignKey('Restaurant', related_name='restaurant_rt', on_delete=models.CASCADE)
    # пользователь
    user = models.ForeignKey('User', related_name='user_rt', on_delete=models.CASCADE)
    # Оценка
    rating = models.FloatField()