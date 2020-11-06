from django.contrib import admin
from ..models import PriceBracket


class PriceBracketAdmin(admin.ModelAdmin):

    def get_form(self, request, obj=None, **kwargs):
        form = super().get_form(request, obj, **kwargs)
        form.base_fields['name'].label = 'Ценовая группа'
        return form


admin.site.register(PriceBracket, PriceBracketAdmin)