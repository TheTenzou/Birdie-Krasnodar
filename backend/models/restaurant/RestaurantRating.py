from django.db import models


# Оценки пользователей
class RestaurantRating(models.Model):
    # ресторан
    restaurant = models.ForeignKey('Restaurant', on_delete=models.CASCADE)
    # пользователь
    user = models.ForeignKey('User', on_delete=models.CASCADE)
    # Оценка
    rating = models.FloatField()