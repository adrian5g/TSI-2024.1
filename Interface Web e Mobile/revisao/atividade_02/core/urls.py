from django.urls import path
from .views import home, perfil

urlpatterns = [
    path('', home),
    path('perfil/', perfil),
]
