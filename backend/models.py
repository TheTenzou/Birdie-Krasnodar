from django.contrib.auth.models import AbstractUser
from django.contrib.gis.db import models


# Create your models here.
class User(AbstractUser):
    profile_picture = models.ImageField(
        upload_to='file_storage/profile_pictures', 
        blank=True, 
        null=True
    )


class Price_bracket(models.Model):
    name = models.CharField(max_length=20)

    class Meta:
        ordering = ['name']

    def __str__(self):
        return self.name


class Food_type(models.Model):
    name = models.CharField(max_length=30)

    class Meta:
        ordering = ['name']

    def __str__(self):
        return self.name


class Restaurant(models.Model):
    name = models.CharField(max_length=20, help_text='Название ресторана.')
    description = models.CharField(max_length=1000, help_text='Описание ресторана.')
    rating = models.FloatField(blank=True, null=True)
    food_type = models.ManyToManyField(Food_type)
    card_picture = models.ImageField(
        upload_to='file_storage/restrant_card_picture', 
        blank=True, 
        null=True
    )

    class Meta:
        ordering = ['name']

    def __str__(self):
        return self.name


class Address(models.Model):
    restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE)
    address = models.CharField(max_length=100)
    coordinates = models.PointField()


class Restaurant_picture(models.Model):
    restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE)
    picture = models.ImageField(
        upload_to='file_storage/restaurant_pictures', 
        blank=True, 
        null=True
    )


class Food_picture(models.Model):
    restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE)
    picture = models.ImageField(upload_to='file_storage/food_pictures')


class News(models.Model):
    headline = models.CharField(max_length=100)
    news_text = models.CharField(max_length=1000)
    publication_date = models.DateTimeField(auto_now_add=True)
    card_picture = models.ImageField(
        upload_to='file_storage/news_picture_card',
        blank=True,
        null=True
    )

    class Meta():
        ordering = ['headline']

    def __str__(self):
        return self.headline
    
class News_picture(models.Model):
    news = models.ForeignKey(News, on_delete=models.CASCADE)
    picture = models.ImageField(upload_to='file_storage/news_pictures')


class Review(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='user')
    restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE)
    up_voite_users = models.ManyToManyField(User, related_name='up_voite_users')
    down_voite_users = models.ManyToManyField(User, related_name='down_voite_users')
    headline = models.CharField(max_length=100)
    text = models.CharField(max_length=500)

    class Meta():
        ordering = ['headline']
    
    def __str__(self):
        return self.headline

    
class Comment(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    news = models.ForeignKey(News, on_delete=models.CASCADE)
    text = models.CharField(max_length=500)