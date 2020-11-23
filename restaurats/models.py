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
    price_bracket = models.ForeignKey('PriceBracket', related_name='price_bracket', on_delete=models.PROTECT)
    # Картинка для привью
    card_picture = models.FileField(
        upload_to='file_storage/restrant_card_picture', 
        blank=True, 
        null=True
    )
    slug = models.SlugField(blank=False, unique=True)

    class Meta:
        ordering = ['name']
        verbose_name = 'Рестаран'
        verbose_name_plural = 'Рестораны'

    def __str__(self):
        return self.name


# Адресс ресторана
class Address(models.Model):
    # Ресторан
    restaurant = models.ForeignKey('Restaurant', related_name='address', on_delete=models.CASCADE)
    # Адресс
    address = models.CharField(max_length=100)
    # Координаты ресторана
    coordinates = models.PointField()



# фотографии еды
class FoodPicture(models.Model):
    # ресторан
    restaurant = models.ForeignKey('Restaurant', related_name='food_pictures', on_delete=models.CASCADE)
    # фотография
    picture = models.FileField(upload_to='file_storage/food_pictures')


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


# фотографии ресторана
class RestaurantPicture(models.Model):
    # Ресторан
    restaurant = models.ForeignKey('Restaurant', related_name='restaurant_pictures', on_delete=models.CASCADE)
    # фотография
    picture = models.FileField(upload_to='file_storage/restaurant_pictures')


# Оценки пользователей
class RestaurantRating(models.Model):
    # ресторан
    restaurant = models.ForeignKey('Restaurant', related_name='restaurant_rt', on_delete=models.CASCADE)
    # пользователь
    user = models.ForeignKey('User', related_name='user_rt', on_delete=models.CASCADE)
    # Оценка
    rating = models.FloatField()

    class Meta:
        unique_together = ('restaurant', 'user')