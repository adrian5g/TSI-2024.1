from django.db import models

"""
CURSO:
nome: texto
limite: inteiro
quantidade_de_periodos: inteiro

ALUNO
nome: texto
curso: id
periodo_atual: inteiro

DISCIPLINA:
nome: texto
curso: id
periodo_requerido: inteiro

NOTA
valor: decimal
aluno: id
disciplina: id
"""

class Curso(models.Model):
  nome = models.CharField('Nome', max_length=300)
  vagas = models.IntegerField('Vagas', max_length=100)
  periodos = models.IntegerField('Perídos', max_length=16)

class Aluno(models.Model):
  nome = models.CharField('Nome', max_length=300)
  periodo_atual = models.IntegerField('Perído Atual', max_length=16)
  curso = models.ForeignKey(Curso, on_delete=models.PROTECT)

class Disciplina(models.Model):
  nome = models.CharField('Nome', max_length=300)
  periodo_requerido = models.IntegerField('Perído Requerido', max_length=16)
  curso = models.ForeignKey(Curso, on_delete=models.PROTECT)

class Nota(models.Model):
  valor = models.DecimalField('Valor')
  aluno = models.ForeignKey(Aluno, on_delete=models.PROTECT)
  disciplina = models.ForeignKey(Disciplina, on_delete=models.PROTECT)