from django.db import models
from django.contrib.auth.models import AbstractUser


# Create your models here.
# Модель пользователя
class User(AbstractUser):
    # Фото профиля
    profile_picture = models.FileField(
        upload_to='file_storage/profile_pictures', 
        blank=True, 
        null=True
    )

