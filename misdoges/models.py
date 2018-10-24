from django.db import models
from django.utils import timezone

#class Perro(models.Model):
#    nombre = models.CharField(max_length=50)
#    raza = models.CharField(max_length=50)
#    descripcion = models.CharField(max_length=200)
#    estado = models.CharField(max_length=11)
#    foto = models.ImageField(upload_to='misdoges/album/img')
#    created_date = models.DateTimeField(
#            default=timezone.now)
#    published_date = models.DateTimeField(
#            blank=True, null=True)
#
#    def create(self):
#        self.published_date = timezone.now()
#        self.save()
#
#    def __str__(self):
#        return self.nombre