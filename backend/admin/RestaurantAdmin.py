from django.contrib import admin
from django.contrib.gis.db import models
from ..models import Restaurant, RestaurantPicture, FoodPicture, Address
from mapwidgets.widgets import GooglePointFieldInlineWidget


class RestaurantPicturesInLine(admin.TabularInline):
    model = RestaurantPicture
    extra = 0


class FoodPicturesInLine(admin.TabularInline):
    model = FoodPicture
    extra = 0


class AddressInLine(admin.TabularInline):
    model = Address
    extra = 0
    formfield_overrides = {
        models.PointField: {"widget": GooglePointFieldInlineWidget}
    }


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


admin.site.register(Restaurant, RestaurantAdmin)