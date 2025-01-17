from django.shortcuts import render, redirect
from .models import Curso, Area
from .forms import CursoForm, PublicoForm, AreaForm
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import AreaSeriealizer


@api_view(['GET'])
def areaAPIListar(request):
    areas = Area.objects.all()
    areas_serializer = AreaSeriealizer(areas, many=True)

    return Response(areas_serializer.data)


@api_view(['PUT'])
def areaAPIAdicionar(request):
    area = AreaSeriealizer(data=request.data)
    if (area.is_valid()):
        area.save()
        return Response(area.data, status=status.HTTP_201_CREATED)


@api_view(['POST'])
def areaAPIAtualizar(request, id):
    area_bd = Area.objects.get(pk=id)
    area = AreaSeriealizer(data=request.data, instance=area_bd)

    if (area.is_valid()):
        area.save()
        return Response(area.data, status=status.HTTP_202_ACCEPTED)


@api_view(['DELETE'])
def areaAPIRemover(request, id):
    area_bd = Area.objects.get(pk=id)

    if area_bd:
        area_bd.delete()
        return Response(status=status.HTTP_202_ACCEPTED)

    return Response(status=status.HTTP_404_NOT_FOUND)


def cursos(request):
    lista_cursos = Curso.objects.all()

    context = {
        'cursos': lista_cursos,
    }

    return render(request, 'cursos.html', context)


def cadastrar_curso(request):
    form = CursoForm(request.POST or None)

    if form.is_valid():
        form.save()
        return redirect('cursos')

    context = {
        'form_curso': form,
    }

    return render(request, 'curso_cadastrar.html', context)


def cadastrar_publico(request):
    form = PublicoForm(request.POST or None)

    if form.is_valid():
        form.save()
        return redirect('cursos')

    context = {
        'form_publico': form,
    }

    return render(request, 'publico_cadastrar.html', context)


def cadastrar_area(request):
    form = AreaForm(request.POST or None)

    if form.is_valid():
        form.save()
        return redirect('cursos')

    context = {
        'form_area': form,
    }

    return render(request, 'area_cadastrar.html', context)


def editar_curso(request, id):
    # pegar um curso pelo id
    curso = Curso.objects.get(pk=id)  # atenção para find() functions

    form = CursoForm(request.POST or None, instance=curso)

    if form.is_valid():
        form.save()
        return redirect('cursos')

    context = {
        'form_curso': form,
    }

    return render(request, 'curso_cadastrar.html', context)


def remover_curso(request, id):
    curso = Curso.objects.get(pk=id)  # pk = primary key | chave primária
    curso.delete()

    return redirect('cursos')
