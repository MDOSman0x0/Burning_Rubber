# Generated by Django 4.2.7 on 2023-12-03 09:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('playground', '0003_react_price'),
    ]

    operations = [
        migrations.AddField(
            model_name='react',
            name='mpg',
            field=models.IntegerField(default=1000),
        ),
    ]
