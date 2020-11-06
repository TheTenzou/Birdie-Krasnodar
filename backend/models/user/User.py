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