from django.db import models


# Коментарий под новостью
class Comment(models.Model):
    # пользователь
    user = models.ForeignKey('User', on_delete=models.CASCADE)
    # новость
    news = models.ForeignKey('News', on_delete=models.CASCADE)
    # текст
    text = models.TextField(max_length=500)
    # дата публикации
    publication_date = models.DateTimeField(auto_now_add=True)

    class Meta():
        verbose_name = 'Коментарий'
        verbose_name_plural = 'Коментарии'