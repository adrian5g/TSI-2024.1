from django.urls import path
from .views import areaAPIListar, areaAPIAdicionar, areaAPIAtualizar, areaAPIRemover

urlpatterns = [
    path('areas/listar/', areaAPIListar),
    path('areas/adicionar/', areaAPIAdicionar),
    path('areas/atualizar/<int:id>/', areaAPIAtualizar),
    path('areas/remover/<int:id>/', areaAPIRemover),
]
