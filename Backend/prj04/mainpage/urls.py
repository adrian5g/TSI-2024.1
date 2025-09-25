from django.urls import path
from .views import *

urlpatterns = [
    path('main/', main),
    path('noticia01/', noticia01),
    path('noticia02/', noticia02),
]