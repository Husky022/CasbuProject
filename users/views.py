from rest_framework import viewsets
from .models import CBUser
from .serializers import CBUserModelSerializer
from rest_framework.response import Response
from rest_framework.renderers import JSONRenderer
from django.shortcuts import get_object_or_404


class CBUserModelViewSet(viewsets.ModelViewSet):
    http_method_names = ['get', 'post', 'head', 'delete', 'put']

    def _allowed_methods(self):
        return [m.upper() for m in self.http_method_names]

    def get_serializer_class(self):
        return CBUserModelSerializer

    def get_queryset(self):
        return CBUser.objects.all()

    def create(self, request, *args, **kwargs):
        return Response({'message': 'User creation is not supported'})

    def destroy(self, request, *args, **kwargs):
        return Response({'message': 'User deleting is not supported'})

    def retrieve(self, request, pk=None):
        user = get_object_or_404(CBUser, pk=pk)
        serializer = CBUserModelSerializer(user)
        return Response(serializer.data)

    def update(self, request, *args, **kwargs):
        partial = kwargs.pop('partial', False)
        instance = self.get_object()
        serializer = self.get_serializer(instance, data=request.data, partial=partial)
        serializer.is_valid(raise_exception=True)
        self.perform_update(serializer)

        if getattr(instance, '_prefetched_objects_cache', None):
            # If 'prefetch_related' has been applied to a queryset, we need to
            # forcibly invalidate the prefetch cache on the instance.
            instance._prefetched_objects_cache = {}

        return Response({'message': f'User {request.data["name"]} succesfull updated'})


