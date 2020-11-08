from django.contrib.gis.db import models


# Адресс ресторана
class Address(models.Model):
    # Ресторан
    restaurant = models.ForeignKey('Restaurant', related_name='addess', on_delete=models.CASCADE)
    # Адресс
    address = models.CharField(max_length=100)
    # Координаты ресторана
    coordinates = models.PointField()