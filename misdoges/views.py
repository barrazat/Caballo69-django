from django.shortcuts import render,redirect
from django.utils import timezone
from .models import Perro
from django.contrib.auth.forms import UserCreationForm,AuthenticationForm
from django.contrib.auth import login

def gallery(request):
    perros = Perro.objects.filter(published_date__lte=timezone.now()).order_by('published_date')
    return render(request, 'blog/gallery.html', {'perros': perros})

def index(request):
    return render(request,'blog/index.html')

def sign_up(request):
    return render(request,'blog/sign-up.html')
