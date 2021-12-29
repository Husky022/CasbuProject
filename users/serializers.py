from rest_framework.serializers import HyperlinkedModelSerializer
from .models import CBUser


class CBUserModelSerializer(HyperlinkedModelSerializer):
   class Meta:
       model = CBUser
       fields = '__all__'
