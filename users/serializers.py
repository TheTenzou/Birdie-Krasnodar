from rest_framework import serializers
from .models import User


# Сериалезатор для пользователя
class UserSerializer(serializers.ModelSerializer):

    email = serializers.EmailField(
        required=True
    )
    username = serializers.CharField()
    password = serializers.CharField(min_length=8, write_only=True)

    class Meta:
        model = User
        fields = ('email', 'username', 'password')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)  # TODO redo
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance

class UserDetailSerializer(serializers.ModelSerializer):
    profile_picture = serializers.FileField(max_length=None, use_url=True, allow_null=True, required=False)

    class Meta:
        model = User
        fields = ('username', 'password', 'first_name', 'last_name', 'email', 'date_joined', 'last_login', 'profile_picture')
        extra_kwargs = {
            'password': {
                'write_only': True,
                'required': False
                 },
            'username': {'required': False}
        }

    def update(self, instance, validated_data):
        password = validated_data.pop('password', None)
        instance = super(UserDetailSerializer, self).update(instance, validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance
