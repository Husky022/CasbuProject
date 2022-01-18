from django.db import models
from users.models import CBUser


class Project(models.Model):
    name = models.CharField(max_length=16, unique=True)
    users = models.ManyToManyField(CBUser)
    repo_link = models.URLField(blank=True)

    def __str__(self):
        return self.name


class Note(models.Model):
    project = models.ForeignKey(Project, on_delete=models.CASCADE)
    text = models.TextField()
    create = models.DateTimeField(auto_now_add=True)
    update = models.DateTimeField(auto_now=True)
    creator = models.ForeignKey(CBUser, on_delete=models.PROTECT)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return self.text

