from django.contrib import admin
from . import models


# Register your models here.
class UserAdmin(admin.ModelAdmin):
    model = models.User
    list_display = ('username', 'is_staff', 'first_name', 'last_name')
    list_filter = ['is_staff']
    search_fields = ['first_name', 'last_name', 'username'] 

    def get_form(self, request, obj=None, **kwargs):
        form = super().get_form(request, obj, **kwargs)
        form.base_fields["profile_picture"].label = "Картика профиля"
        return form

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
    list_display = ('name',)
    list_filter = ['food_type', 'price_bracket']
    search_fields = ['name', 'description']


class NewsPictures(admin.TabularInline):
    model = models.News_picture
    extra = 0


class NewsAdmin(admin.ModelAdmin):
    fields = ('headline', 'news_type', 'news_text', 'card_picture')
    inlines = [
        NewsPictures,
    ]
    list_display = ('headline', 'news_type', 'publication_date')
    list_filter = ['news_type', 'publication_date']
    search_fields = ['headline', 'news_text']


class ReviewAdmin(admin.ModelAdmin):
    list_display = ('headline', 'restaurant', 'user', 'publication_date')
    list_filter = ['restaurant', 'publication_date', 'is_useful']
    search_fields = ['headline', 'user', 'restaurant', 'headline']


class CommentAdmin(admin.ModelAdmin):
    list_display = ('news', 'user', 'publication_date')
    list_filter = ['news', 'publication_date']
    search_fields = ['text', 'user', 'news']


admin.site.register(models.User, UserAdmin)
admin.site.register(models.Restaurant, RestaurantAdmin)
admin.site.register(models.News, NewsAdmin)
admin.site.register(models.Review, ReviewAdmin)
admin.site.register(models.Comment, CommentAdmin)
admin.site.register(models.Price_bracket)
admin.site.register(models.Food_type)
admin.site.register(models.News_type)