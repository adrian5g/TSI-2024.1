from django.shortcuts import render

# Create your views here.
def main(resquest):
  return render(resquest, "main.html")

def noticia01(resquest):
  return render(resquest, "noticia01.html")

def noticia02(resquest):
  return render(resquest, "noticia02.html")