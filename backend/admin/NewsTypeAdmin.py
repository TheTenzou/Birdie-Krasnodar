from django.contrib import admin
from ..models import NewsType


class NewsTypeAdmin(admin.ModelAdmin):

    def get_form(self, request, obj=None, **kwargs):
        form = super().get_form(request, obj, **kwargs)
        form.base_fields['name'].label = 'Название типа'
        return form


admin.site.register(NewsType, NewsTypeAdmin)