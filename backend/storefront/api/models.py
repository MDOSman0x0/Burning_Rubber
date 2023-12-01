from django.db import models

# Create your models here.

class User(models.Model):
    emailAddress = models.TextField(null=True, blank=True)
    password = models.TextField(null=True, blank=True)
    updated = models.DateTimeField(auto_now=True)
    created = models.DateTimeField(auto_now_add=True)

    def __list__(self):
        return {self.emailAddress[0:50], self.password[0:50]}