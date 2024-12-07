from django.urls import path
from .views import home, cadastro, cadastro_resultado, login, login_resultado

urlpatterns = [
    path('', home, name='home'),
    path('cadastro/', cadastro, name='cadastro'),
    path('cadastro_resultado/', cadastro_resultado, name='cadastro_resultado'),
    path('login/', login, name='login'),
    path('login_resultado/', login_resultado, name='login_resultado'),
]
