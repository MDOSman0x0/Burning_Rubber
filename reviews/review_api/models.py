from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator

class Review(models.Model):
    rating = models.IntegerField(default=5, validators=[MaxValueValidator(5), MinValueValidator(1)])
    fullName = models.CharField(max_length=100)
    vehicle = models.CharField(max_length=200)
    comments = models.TextField(max_length=500)
    img = models.URLField(max_length=10000, default='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Lamborghinetta_1959.jpg/800px-Lamborghinetta_1959.jpg')
    created = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.vehicle 