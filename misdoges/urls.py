from django.urls import path
from . import views



urlpatterns = [
    path('', views.index, name='index'),
    path('misdoges/gallery/', views.gallery, name='gallery'),
    path('misdoges/sign-up/',views.sign_up, name='sign-up'),

]