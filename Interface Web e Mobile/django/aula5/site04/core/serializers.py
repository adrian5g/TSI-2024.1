from rest_framework import serializers
from .models import Area

class AreaSeriealizer(serializers.ModelSerializer):
  class Meta:
    model = Area
    fields = ['id', 'nome']