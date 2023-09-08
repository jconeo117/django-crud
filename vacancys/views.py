from django.shortcuts import render
from rest_framework import viewsets
from .models import Vacancy
from .serializer import VacancySerializer

# Create your views here.
class VacancyViewset(viewsets.ModelViewSet):
  serializer_class = VacancySerializer
  queryset = Vacancy.objects.all()