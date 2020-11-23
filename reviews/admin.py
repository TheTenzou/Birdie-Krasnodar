from django.contrib import admin
from .models import Review


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