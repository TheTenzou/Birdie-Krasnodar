from django.db import models


# Ресторан
class Restaurant(models.Model):
    # Название ресторана
    name = models.CharField(max_length=20, help_text='Название ресторана.')
    # Описание
    description = models.TextField(max_length=1000, help_text='Описание ресторана.')
    # Тип еды
    food_type = models.ManyToManyField('FoodType')
    # Ценовая категория
    price_bracket = models.ForeignKey('PriceBracket', on_delete=models.PROTECT)
    # Картинка для привью
    card_picture = models.FileField(
        upload_to='file_storage/restrant_card_picture', 
        blank=True, 
        null=True
    )

    class Meta:
        ordering = ['name']
        verbose_name = 'Рестаран'
        verbose_name_plural = 'Рестораны'

    def __str__(self):
        return self.name