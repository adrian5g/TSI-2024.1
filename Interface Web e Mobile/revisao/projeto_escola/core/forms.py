from django.forms import ModelForm
from .models import Curso, Disciplina


class CursoForm(ModelForm):
    class Meta:
        model = Curso
        fields = ['nome', 'vagas', 'periodos']


class DisciplinaForm(ModelForm):
    class Meta:
        model = Disciplina
        fields = ['nome', 'periodo_requerido', 'curso']

    def __init__(self, *args, **kwargs):
        curso_default = kwargs.pop('curso_default', None)
        super().__init__(*args, **kwargs)
        self.fields['curso'].initial = curso_default
