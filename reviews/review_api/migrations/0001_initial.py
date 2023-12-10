# Generated by Django 4.2.7 on 2023-12-10 02:58

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Review',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('rating', models.IntegerField(default=5, validators=[django.core.validators.MaxValueValidator(5), django.core.validators.MinValueValidator(1)])),
                ('fullName', models.CharField(max_length=100)),
                ('vehicle', models.CharField(max_length=200)),
                ('comments', models.TextField(max_length=500)),
                ('img', models.URLField(default='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Lamborghinetta_1959.jpg/800px-Lamborghinetta_1959.jpg', max_length=10000)),
                ('created', models.DateField(auto_now_add=True)),
            ],
        ),
    ]
