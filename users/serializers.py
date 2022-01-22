from rest_framework import serializers
from .models import CBUser


class CBUserModelSerializer(serializers.ModelSerializer):

    class Meta:
        model = CBUser
        fields = '__all__'
