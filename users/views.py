from rest_framework.viewsets import ModelViewSet
from .models import CBUser
from .serializers import CBUserModelSerializer


class CBUserModelViewSet(ModelViewSet):
   serializer_class = CBUserModelSerializer
   queryset = CBUser.objects.all()


