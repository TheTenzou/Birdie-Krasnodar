from django.db import models


# фотографии ресторана
class RestaurantPicture(models.Model):
    # Ресторан
    restaurant = models.ForeignKey('Restaurant', on_delete=models.CASCADE)
    # фотография
    picture = models.FileField(upload_to='file_storage/restaurant_pictures')