from rest_framework.response import Response
from rest_framework import viewsets
from .models import Project, Note
from .serializers import ProjectModelSerializer, NoteModelSerializer
from rest_framework.pagination import PageNumberPagination


class ProjectPaginator(PageNumberPagination):
    page_size = 10


class NotePaginator(PageNumberPagination):
    page_size = 20


class ProjectModelViewSet(viewsets.ModelViewSet):
    http_method_names = ['get', 'post', 'head', 'delete', 'put']
    filterset_fields = ['name']
    pagination_class = ProjectPaginator

    def _allowed_methods(self):
        return [m.upper() for m in self.http_method_names]

    def get_serializer_class(self):
        return ProjectModelSerializer

    def get_queryset(self):
        return Project.objects.all()


class NoteModelViewSet(viewsets.ModelViewSet):
    http_method_names = ['get', 'post', 'head', 'delete', 'put']
    filterset_fields = ['project', 'creator']
    pagination_class = NotePaginator

    def _allowed_methods(self):
        return [m.upper() for m in self.http_method_names]

    def get_serializer_class(self):
        return NoteModelSerializer

    def get_queryset(self):
        return Note.objects.all()

    def destroy(self, request, pk):
        note = Note.objects.filter(pk=pk).first()
        note.is_active = False
        note.save()
        return Response({'message': 'Note successfully deleted'})



