from django.db import models

# Create your models here.
class Child(models.Model):
    """A child has a name, a birthdate, a parent, and a guide"""
    """A child has many assessments and many organizations"""
    name = models.CharField(max_length=200)
    birthdate = models.DateField()
    parent = models.ForeignKey(Parent, on_delete=models.CASCADE)
    guide = models.ForeignKey(Guide, on_delete=models.CASCADE)

class Assessment(models.Model):
    """An assessment has a name, a date, a child, and a guide"""
    """An assessment has many questions"""
    date = models.DateField()
    age_type = models.FloatField()

class AssessmentDetail(models.Model):
    """An assessment has """
    literacy = models.FloatField()
    math = models.FloatField()
    social = models.FloatField()
    physical = models.FloatField()