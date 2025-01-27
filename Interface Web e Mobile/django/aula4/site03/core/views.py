from django.shortcuts import render


def home(request):
    return render(request, 'index.html')


def cadastro(request):
    return render(request, 'cadastro.html')


def cadastro_resultado(request):
    nome = request.POST['nome']
    email = request.POST['email']
    cpf = request.POST['cpf']

    context = {
        'nome_digitado': nome,
        'email_digitado': email,
        'cpf_digitado': cpf,
    }

    return render(request, 'cadastro_resultado.html', context)

def login(request):
    return render(request, 'login.html')

def login_resultado(request):
    email = request.POST['email']
    senha = request.POST['senha']

    email_correto = "admin@email.com"
    senha_correta = "123@IFRN"

    if email == email_correto and senha == senha_correta:
        context = {
            'email_digitado': email,
            'senha_digitada': senha,
        }

        return render(request, 'login_resultado.html', context)
    
    context = {
        'msg': "Email ou senha iválidos.",
    }

    return render(request, 'login.html', context)