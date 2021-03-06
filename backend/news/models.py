from django.db import models


# Новости
class News(models.Model):
    # Заголовок
    headline = models.CharField(max_length=100)
    # текст новости
    news_text = models.TextField(max_length=1000)
    # дата публикации
    publication_date = models.DateTimeField(auto_now_add=True)
    # тип новости
    news_type = models.ForeignKey('NewsType', related_name='news_type', on_delete=models.PROTECT)
    # превью фото
    card_picture = models.FileField(
        upload_to='file_storage/news_picture_card',
        blank=True,
        null=True
    )
    slug = models.SlugField(blank=False, unique=True)

    class Meta():
        ordering = ['headline']
        verbose_name = 'Новость'
        verbose_name_plural = 'Новости'

    def __str__(self):
        return self.headline


# фото новостей
class NewsPicture(models.Model):
    # Новость
    news = models.ForeignKey('News', related_name='news_pictures', on_delete=models.CASCADE)
    # фото
    picture = models.FileField(upload_to='file_storage/news_pictures')


# тип новостей
class NewsType(models.Model):
    # Название типа
    name = models.CharField(max_length=50)

    class Meta:
        verbose_name = 'Тип новости'
        verbose_name_plural = 'Типы новостей'
