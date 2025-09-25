from django.contrib import admin
from django.urls import path
from .views import *

urlpatterns = [
    path('main/', page, name="main"),
    path('noticia01/', noticia1, name="noticia1"),
    path('noticia02/', noticia2, name="noticia2"),
]
