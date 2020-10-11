from django.contrib.auth.models import AbstractUser
from django.contrib.gis.db import models


# Create your models here.
# Модель пользователя
class User(AbstractUser):
    # Фото профиля
    profile_picture = models.FileField(
        upload_to='file_storage/profile_pictures', 
        blank=True, 
        null=True
    )


# Ценовая категория ресторана
class Price_bracket(models.Model):
    # Название 
    name = models.CharField(max_length=20)

    class Meta:
        ordering = ['name']
        verbose_name = 'Ценовая категория'
        verbose_name_plural = 'Ценовые категории'

    def __str__(self):
        return self.name


# Тип еды ресторана
class Food_type(models.Model):
    # Название
    name = models.CharField(max_length=30)

    class Meta:
        ordering = ['name']
        verbose_name = 'Тип еды'
        verbose_name_plural = 'Типы еды'

    def __str__(self):
        return self.name


# Ресторан
class Restaurant(models.Model):
    # Название ресторана
    name = models.CharField(max_length=20, help_text='Название ресторана.')
    # Описание
    description = models.TextField(max_length=1000, help_text='Описание ресторана.')
    # Тип еды
    food_type = models.ManyToManyField(Food_type)
    # Ценовая категория
    price_bracket = models.ForeignKey(Price_bracket, on_delete=models.PROTECT)
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


# Адресс ресторана
class Address(models.Model):
    # Ресторан
    restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE)
    # Адресс
    address = models.CharField(max_length=100)
    # Координаты ресторана
    coordinates = models.PointField()


# фотографии ресторана
class Restaurant_picture(models.Model):
    # Ресторан
    restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE)
    # фотография
    picture = models.FileField(
        upload_to='file_storage/restaurant_pictures', 
        blank=True, 
        null=True
    )


# фотографии елы
class Food_picture(models.Model):
    # ресторан
    restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE)
    # фотография
    picture = models.FileField(upload_to='file_storage/food_pictures')


# Оценки пользователей
class Restaurant_rating(models.Model):
    # ресторан
    restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE)
    # пользователь
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    # Оценка
    rating = models.FloatField()


# тип новостей
class News_type(models.Model):
    # Название типа
    name = models.CharField(max_length=50)

    class Meta:
        verbose_name = 'Тип новости'
        verbose_name_plural = 'Типы ресторанов'


# Новости
class News(models.Model):
    # Заголовок
    headline = models.CharField(max_length=100)
    # текст новости
    news_text = models.TextField(max_length=1000)
    # дата публикации
    publication_date = models.DateTimeField(auto_now_add=True)
    # тип новости
    news_type = models.ForeignKey(News_type, on_delete=models.PROTECT)
    # превью фото
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
    

# фото новостей
class News_picture(models.Model):
    # Новость
    news = models.ForeignKey(News, on_delete=models.CASCADE)
    # фото
    picture = models.FileField(upload_to='file_storage/news_pictures')


# Обзор ресторана
class Review(models.Model):
    # пользователь
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='user')
    # ресторан
    restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE)
    # пользователи проголосовавшие положительно
    up_voite_users = models.ManyToManyField(User, related_name='up_voite_users')
    # пользователи проголосовавшие отрицательно
    down_voite_users = models.ManyToManyField(User, related_name='down_voite_users')
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

    
# Коментарий под новостью
class Comment(models.Model):
    # пользователь
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    # новость
    news = models.ForeignKey(News, on_delete=models.CASCADE)
    # текст
    text = models.TextField(max_length=500)
    # дата публикации
    publication_date = models.DateTimeField(auto_now_add=True)

    class Meta():
        verbose_name = 'Коментарий'
        verbose_name_plural = 'Коментарии'