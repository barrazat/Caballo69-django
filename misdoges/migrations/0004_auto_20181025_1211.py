# Generated by Django 2.1.2 on 2018-10-25 15:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('misdoges', '0003_perro'),
    ]

    operations = [
        migrations.AlterField(
            model_name='perro',
            name='foto',
            field=models.FileField(upload_to=''),
        ),
    ]
