from django.contrib import admin
from .models import Comment


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


admin.site.register(Comment, CommentAdmin)