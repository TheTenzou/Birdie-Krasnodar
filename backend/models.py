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
    picture = models.ImageField(
        upload_to='file_storage/food_pictures', 
        blank=True, 
        null=True
        )

