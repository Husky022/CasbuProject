from rest_framework.viewsets import ModelViewSet
from .models import CBUser
from .serializers import CBUserModelSerializer


class CBUserModelViewSet(ModelViewSet):
   queryset = CBUser.objects.all()
   serializer_class = CBUserModelSerializer

