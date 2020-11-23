from django.db import models


# Обзор ресторана
class Review(models.Model):
    # пользователь
    user = models.ForeignKey('User', on_delete=models.CASCADE, related_name='user')
    # ресторан
    restaurant = models.ForeignKey('Restaurant', on_delete=models.CASCADE)
    # пользователи проголосовавшие положительно
    up_voite_users = models.ManyToManyField('User', related_name='up_voite_users')
    # пользователи проголосовавшие отрицательно
    down_voite_users = models.ManyToManyField('User', related_name='down_voite_users')
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