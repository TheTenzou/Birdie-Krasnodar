from django.contrib import admin
from . import models


# Register your models here.
class UserAdmin(admin.ModelAdmin):
    model = models.User


class RestaurantPicturesInLine(admin.TabularInline):
    model = models.Restaurant_picture
    extra = 0


class FoodPicturesInLine(admin.TabularInline):
    model = models.Food_picture
    extra = 0


class AddressInLine(admin.TabularInline):
    model = models.Address
    extra = 0


class RestaurantAdmin(admin.ModelAdmin):
    inlines = [
        RestaurantPicturesInLine, 
        FoodPicturesInLine,
        AddressInLine # TODO fix map
    ]


class NewsPictures(admin.TabularInline):
    model = models.News_picture
    extra = 0


class NewsAdmin(admin.ModelAdmin):
    fields = ('headline', 'news_type', 'news_text', 'card_picture')
    inlines = [
        NewsPictures,
    ]


admin.site.register(models.User, UserAdmin)
admin.site.register(models.Restaurant, RestaurantAdmin)
admin.site.register(models.News, NewsAdmin)