from django.contrib import admin
from django.urls import path
from core.views import home, listar_cursos, cadastrar_curso, remover_curso, editar_curso, listar_disciplinas, cadastrar_disciplina

urlpatterns = [
    path('', home, name='home'),
    path('cadastrar_disciplina/<int:id>/', cadastrar_disciplina, name='cadastrar_disciplina'),
    path('listar_disciplinas/<int:id>/', listar_disciplinas, name='listar_disciplinas'),
    path('editar_curso/<int:id>/', editar_curso, name='editar_curso'),
    path('remover_curso/<int:id>/', remover_curso, name='remover_curso'),
    path('cadastrar_curso', cadastrar_curso, name='cadastrar_curso'),
    path('listar_cursos', listar_cursos, name='listar_cursos')
]
