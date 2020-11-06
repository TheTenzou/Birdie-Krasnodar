from django.contrib import admin
from ..models import User


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