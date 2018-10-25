# Generated by Django 2.1.2 on 2018-10-25 03:29

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('misdoges', '0002_delete_perro'),
    ]

    operations = [
        migrations.CreateModel(
            name='Perro',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=50)),
                ('raza', models.CharField(max_length=50)),
                ('descripcion', models.CharField(max_length=200)),
                ('estado', models.CharField(max_length=11)),
                ('foto', models.ImageField(upload_to='misdoges/album/img')),
                ('created_date', models.DateTimeField(default=django.utils.timezone.now)),
                ('published_date', models.DateTimeField(blank=True, null=True)),
            ],
        ),
    ]