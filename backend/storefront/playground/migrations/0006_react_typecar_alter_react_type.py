# Generated by Django 4.2.7 on 2023-12-03 09:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('playground', '0005_alter_react_type'),
    ]

    operations = [
        migrations.AddField(
            model_name='react',
            name='typecar',
            field=models.CharField(default='car', max_length=100),
        ),
        migrations.AlterField(
            model_name='react',
            name='type',
            field=models.CharField(max_length=200),
        ),
    ]
