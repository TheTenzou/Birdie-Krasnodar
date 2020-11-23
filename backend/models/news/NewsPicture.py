from django.db import models


# фото новостей
class NewsPicture(models.Model):
    # Новость
    news = models.ForeignKey('News', related_name='news_pictures', on_delete=models.CASCADE)
    # фото
    picture = models.FileField(upload_to='file_storage/news_pictures')
