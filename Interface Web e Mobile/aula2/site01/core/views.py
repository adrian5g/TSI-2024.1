from django.shortcuts import render

# Create your views here.


def inicial(request):
    return render(request, 'index.html')


def contato(request):
    return render(request, 'contato.html')


def seila(request):
    return render(request, 'sla.html')


def vu(request):
    return render(request, 'sla.html')
