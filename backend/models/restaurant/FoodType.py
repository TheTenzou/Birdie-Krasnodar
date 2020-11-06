from django.db import models


# Тип еды ресторана
class FoodType(models.Model):
    # Название
    name = models.CharField(max_length=30)

    class Meta:
        ordering = ['name']
        verbose_name = 'Тип еды'
        verbose_name_plural = 'Типы еды'

    def __str__(self):
        return self.name
