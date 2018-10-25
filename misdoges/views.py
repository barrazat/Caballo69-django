from django.shortcuts import render
from django.utils import timezone
from .models import Perro

def gallery(request):
    perros = Perro.objects.filter(published_date__lte=timezone.now()).order_by('published_date')
    return render(request, 'blog/gallery.html', {'perros': perros})

def index(request):
    return render(request,'blog/index.html')

def sign_up(request):
    return render(request,'blog/sign-up.html')