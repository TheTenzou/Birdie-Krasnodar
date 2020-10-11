from django.contrib.auth.models import AbstractUser
from django.contrib.gis.db import models


# Create your models here.
class User(AbstractUser):
    profile_picture = models.FileField(
        upload_to='file_storage/profile_pictures', 
        blank=True, 
        null=True
    )


class Price_bracket(models.Model):
    name = models.CharField(max_length=20)

    class Meta:
        ordering = ['name']
        verbose_name = 'Ценовая категория'
        verbose_name_plural = 'Ценовые категории'

    def __str__(self):
        return self.name


class Food_type(models.Model):
    name = models.CharField(max_length=30)

    class Meta:
        ordering = ['name']
        verbose_name = 'Тип еды'
        verbose_name_plural = 'Типы еды'

    def __str__(self):
        return self.name


class Restaurant(models.Model):
    name = models.CharField(max_length=20, help_text='Название ресторана.')
    description = models.TextField(max_length=1000, help_text='Описание ресторана.')
    food_type = models.ManyToManyField(Food_type)
    price_bracket = models.ForeignKey(Price_bracket, on_delete=models.PROTECT)
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


class Address(models.Model):
    restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE)
    address = models.CharField(max_length=100)
    coordinates = models.PointField()


class Restaurant_picture(models.Model):
    restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE)
    picture = models.FileField(
        upload_to='file_storage/restaurant_pictures', 
        blank=True, 
        null=True
    )


class Food_picture(models.Model):
    restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE)
    picture = models.FileField(upload_to='file_storage/food_pictures')


class Restaurant_rating(models.Model):
    restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    rating = models.FloatField()

class News_type(models.Model):
    name = models.CharField(max_length=50)

    class Meta:
        verbose_name = 'Тип новости'
        verbose_name_plural = 'Типы ресторанов'

class News(models.Model):
    headline = models.CharField(max_length=100)
    news_text = models.TextField(max_length=1000)
    publication_date = models.DateTimeField(auto_now_add=True)
    news_type = models.ForeignKey(News_type, on_delete=models.PROTECT)
    card_picture = models.FileField(
        upload_to='file_storage/news_picture_card',
        blank=True,
        null=True
    )

    class Meta():
        ordering = ['headline']
        verbose_name = 'Новость'
        verbose_name_plural = 'Новости'

    def __str__(self):
        return self.headline
    
class News_picture(models.Model):
    news = models.ForeignKey(News, on_delete=models.CASCADE)
    picture = models.FileField(upload_to='file_storage/news_pictures')


class Review(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='user')
    restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE)
    up_voite_users = models.ManyToManyField(User, related_name='up_voite_users')
    down_voite_users = models.ManyToManyField(User, related_name='down_voite_users')
    headline = models.CharField(max_length=100)
    text = models.TextField(max_length=500)
    publication_date = models.DateTimeField(auto_now_add=True)
    is_useful = models.BooleanField()

    class Meta():
        ordering = ['headline']
        verbose_name = 'Обзор'
        verbose_name_plural = 'Обзоры'
    
    def __str__(self):
        return self.headline

    
class Comment(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    news = models.ForeignKey(News, on_delete=models.CASCADE)
    text = models.TextField(max_length=500)
    publication_date = models.DateTimeField(auto_now_add=True)

    class Meta():
        verbose_name = 'Коментарий'
        verbose_name_plural = 'Коментарии'