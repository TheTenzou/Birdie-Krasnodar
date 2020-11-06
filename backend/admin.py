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
        form.base_fields['profile_picture'].label = 'Картика профиля'
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

    def get_form(self, request, obj=None, **kwargs):
        form = super().get_form(request, obj, **kwargs)
        form.base_fields['name'].label = 'Название'
        form.base_fields['description'].label = 'Описание'
        form.base_fields['food_type'].label = 'Тип еды'
        form.base_fields['price_bracket'].label = 'Ценавой диапозон'
        form.base_fields['card_picture'].label = 'Кратинка для карточки'
        return form


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

    def get_form(self, request, obj=None, **kwargs):
        form = super().get_form(request, obj, kwargs)
        form.base_fields['headline'].label = 'Заголовок'
        form.base_fields['news_text'].label = 'Текст'
        # form.base_fields['publication_date'].label = 'Дата публикации'
        form.base_fields['news_type'].label = 'Тип новости'
        form.base_fields['card_picture'].label = 'Картинка карточки'
        return form


class ReviewAdmin(admin.ModelAdmin):
    list_display = ('headline', 'restaurant', 'user', 'publication_date')
    list_filter = ['restaurant', 'publication_date'] 
    search_fields = ['headline', 'user', 'restaurant', 'headline']

    def get_form(self, request, obj=None, **kwargs):
        form = super().get_form(request, obj, **kwargs)
        form.base_fields['user'].label = 'Пользователь'
        form.base_fields['restaurant'].label = 'Ресторан'
        form.base_fields['up_voite_users'].label = 'Пользователи проголосовавшие за'
        form.base_fields['down_voite_users'].label = 'Пользователи проголосовавшие против'
        form.base_fields['headline'].label = 'Заголовок'
        form.base_fields['text'].label = 'Текст'
        # form.base_fields['publication_date'].label = 'Дата публикации'
        form.base_fields['rating'].label = 'Оценка'
        return form


class CommentAdmin(admin.ModelAdmin):
    list_display = ('news', 'user', 'publication_date')
    list_filter = ['news', 'publication_date']
    search_fields = ['text', 'user', 'news']

    def get_form(self, request, obj=None, **kwargs):
        form = super().get_form(request, obj, **kwargs)
        form.base_fields['user'].label = 'Пользователь'
        form.base_fields['news'].label = 'Новость'
        form.base_fields['text'].label = 'Текст'
        # form.base_fields['publication_date'] = 'Дата публикации'
        return form


class PriceBracketAdmin(admin.ModelAdmin):

    def get_form(self, request, obj=None, **kwargs):
        form = super().get_form(request, obj, **kwargs)
        form.base_fields['name'].label = 'Ценовая группа'
        return form

class FoodTypeAdmin(admin.ModelAdmin):

    def get_form(self, request, obj=None, **kwargs):
        form = super().get_form(request, obj, **kwargs)
        form.base_fields['name'].label = 'Название типа'
        return form


class NewsTypeAdmin(admin.ModelAdmin):

    def get_form(self, request, obj=None, **kwargs):
        form = super().get_form(request, obj, **kwargs)
        form.base_fields['name'].label = 'Название типа'
        return form

        
admin.site.register(models.User, UserAdmin)
admin.site.register(models.Restaurant, RestaurantAdmin)
admin.site.register(models.News, NewsAdmin)
admin.site.register(models.Review, ReviewAdmin)
admin.site.register(models.Comment, CommentAdmin)
admin.site.register(models.Price_bracket, PriceBracketAdmin)
admin.site.register(models.Food_type, FoodTypeAdmin)
admin.site.register(models.News_type, NewsTypeAdmin)