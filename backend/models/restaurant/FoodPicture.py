from django.db import models


# фотографии елы
class FoodPicture(models.Model):
    # ресторан
    restaurant = models.ForeignKey('Restaurant', on_delete=models.CASCADE)
    # фотография
    picture = models.FileField(upload_to='file_storage/food_pictures')
