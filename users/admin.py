from django.contrib import admin
from .models import User, Comment, Review


# Register your models here.
class UserAdmin(admin.ModelAdmin):
    model = User
    list_display = ('username', 'is_staff', 'first_name', 'last_name')
    list_filter = ['is_staff']
    search_fields = ['first_name', 'last_name', 'username'] 

    def get_form(self, request, obj=None, **kwargs):
        form = super().get_form(request, obj, **kwargs)
        form.base_fields['profile_picture'].label = 'Картика профиля'
        return form

admin.site.register(User, UserAdmin)


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


admin.site.register(Review, ReviewAdmin)