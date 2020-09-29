from django.contrib.auth.models import AbstractUser
from django.db import models


# Create your models here.
class User(AbstractUser):
    profile_picture = models.ImageField(upload_to='file_storage/profile_pictures')