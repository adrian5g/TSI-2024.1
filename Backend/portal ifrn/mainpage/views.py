from django.shortcuts import render

def page(request):
  return render(request, 'page.html')

def noticia1(request):
  return render(request, 'noticia1.html')

def noticia2(request):
  return render(request, 'noticia2.html')