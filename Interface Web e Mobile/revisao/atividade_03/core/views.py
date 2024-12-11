from django.shortcuts import render


def paginaUm(request):
    return render(request, 'pagina1.html')

def paginaDois(request):
    return render(request, 'pagina2.html')

def paginaTres(request):
    return render(request, 'pagina3.html')