from django.db import models
from uuid import uuid4

# Create your models here.

class CBUser(models.Model):
   id = models.CharField(primary_key=True, max_length=64, default=uuid4)
   username = models.CharField(max_length=64)
   firstname = models.CharField(max_length=64)
   lastname = models.CharField(max_length=64)
   email = models.CharField(unique=True, max_length=64)
   birthday_year = models.DateField()

   def __str__(self):
      return f'Пользователь {self.firstname} {self.lastname} - ({self.username})'
