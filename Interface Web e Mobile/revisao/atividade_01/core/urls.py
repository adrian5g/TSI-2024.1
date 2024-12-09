from django.urls import path
from .views import nome, home, campus

urlpatterns = [
  path('', home),
  path('nome/', nome),
  path('ifrn/', campus),
]