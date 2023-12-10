from django.db import models

# Create your models here.

class React(models.Model):
    make = models.CharField(max_length=100)
    type = models.CharField(max_length=200)
    typecar = models.CharField(max_length=100, default='car')
    img = models.URLField(max_length=500, default='https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Vintage_blue_car.png/800px-Vintage_blue_car.png')
    price = models.IntegerField(default=9999999)
    mpg = models.IntegerField(default=1000)
