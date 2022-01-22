from rest_framework import serializers
from .models import Project, Note


class ProjectModelSerializer(serializers.ModelSerializer):

   class Meta:
       model = Project
       fields = '__all__'


class NoteModelSerializer(serializers.ModelSerializer):

   class Meta:
       model = Note
       fields = '__all__'
