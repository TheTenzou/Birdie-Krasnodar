from django.db import models


# Ценовая категория ресторана
class PriceBracket(models.Model):
    # Название 
    name = models.CharField(max_length=20)

    class Meta:
        ordering = ['name']
        verbose_name = 'Ценовая категория'
        verbose_name_plural = 'Ценовые категории'

    def __str__(self):
        return self.name