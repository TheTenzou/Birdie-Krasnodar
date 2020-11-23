from django.db import models
from users.models import User
from restaurants.models import Restaurant


# Обзор ресторана
class Review(models.Model):
    # пользователь
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='user')
    # ресторан
    restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE)
    # пользователи проголосовавшие положительно
    up_vote_users = models.ManyToManyField(User, related_name='up_voite_users', blank=True)
    # пользователи проголосовавшие отрицательно
    down_vote_users = models.ManyToManyField(User, related_name='down_voite_users', blank=True)
    # заголовок
    headline = models.CharField(max_length=100)
    # текст обзора
    text = models.TextField(max_length=500)
    # дата публикации
    publication_date = models.DateTimeField(auto_now_add=True)
    # оценка обзоршика
    rating = models.FloatField()

    class Meta():
        ordering = ['headline']
        verbose_name = 'Обзор'
        verbose_name_plural = 'Обзоры'
    
    def __str__(self):
        return self.headline