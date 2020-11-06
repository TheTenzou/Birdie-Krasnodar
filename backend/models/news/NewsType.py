from django.db import models


# тип новостей
class NewsType(models.Model):
    # Название типа
    name = models.CharField(max_length=50)

    class Meta:
        verbose_name = 'Тип новости'
        verbose_name_plural = 'Типы ресторанов'
