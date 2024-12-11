from django.urls import path
from .views import paginaUm, paginaDois, paginaTres

urlpatterns = [
    path('', paginaUm, name='pagina1'),
    path('pagina2', paginaDois, name='pagina2'),
    path('pagina3', paginaTres, name='pagina3'),
]
