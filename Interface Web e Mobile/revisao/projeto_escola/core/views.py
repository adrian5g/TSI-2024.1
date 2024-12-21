from django.shortcuts import render, redirect
from core.models import Curso, Disciplina
from .forms import CursoForm, DisciplinaForm


def home(request):
    return render(request, 'index.html')


def listar_cursos(request):
    cursos = Curso.objects.all()

    context = {
        'cursos': cursos
    }

    return render(request, 'cursos/listar_cursos.html', context)


def cadastrar_curso(request):
    form = CursoForm(request.POST or None)

    if form.is_valid():
        form.save()
        return redirect('listar_cursos')

    context = {
        'form_curso': form
    }

    return render(request, 'cursos/cadastrar_curso.html', context)


def editar_curso(request, id):
    curso = Curso.objects.get(pk=id)
    form = CursoForm(request.POST or None, instance=curso)

    if form.is_valid():
        form.save()
        return redirect('listar_cursos')

    context = {
        'form_curso': form
    }

    return render(request, 'cursos/cadastrar_curso.html', context)


def remover_curso(request, id):
    curso = Curso.objects.get(pk=id)
    curso.delete()

    return redirect('listar_cursos')


def listar_disciplinas(request, id):
    disciplinas = Disciplina.objects.filter(curso=id)

    context = {
        'curso_id': id,
        'disciplinas': disciplinas
    }

    return render(request, 'cursos/listar_disciplinas.html', context)


def cadastrar_disciplina(request, id):
    curso = Curso.objects.get(pk=id)
    form = DisciplinaForm(request.POST or None, curso_default=curso)
    
    # periodo = form.fields['periodo_requerido'].initial
    # perido_invalido =  0 > periodo > curso.periodos

    if form.is_valid():
        form.save()
        return redirect('listar_disciplinas', id)

    context = {
        'form_disciplina': form
    }

    return render(request, 'cursos/cadastrar_disciplina.html', context)
