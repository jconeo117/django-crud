from django.db import models
from django.utils.translation import gettext_lazy as _

class Vacancy(models.Model):
    
    class TypeWork(models.IntegerChoices):
        REMOTE = 0, _('Remoto')
        HYBRID = 1, _('Hibrido')
        ON_SITE = 2, _('Presencial')

    vacancy_url = models.URLField()
    name = models.CharField(max_length=255)
    company_name = models.CharField(max_length=255)
    country = models.CharField(max_length=255)
    date_apply = models.DateField(auto_now_add=True)
    date_published = models.DateField()
    contacted = models.BooleanField(default=False)
    interviewed = models.BooleanField(default=False)
    type = models.IntegerField(default=TypeWork.REMOTE, choices=TypeWork.choices)
    salary = models.CharField(max_length=40)

    def __str__(self):
        return f"{self.name} - {self.company_name}"