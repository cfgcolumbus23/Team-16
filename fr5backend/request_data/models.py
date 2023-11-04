from django.db import models

# Create your models here.
class Child(models.Model):
    """A child has a name, a birthdate, a parent, and a guide"""
    """A child has many assessments and many organizations"""
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    birthdate = models.DateField()
    parent = models.ForeignKey("Parent", on_delete=models.CASCADE)
    guide = models.ForeignKey("Guide", on_delete=models.CASCADE)

class Assessment(models.Model):
    """An assessment has a name, a date, a child, and a guide"""
    """An assessment has many questions"""
    date = models.DateField()
    age_group = models.FloatField()

class AssessmentDetail(models.Model):
    """An assessment has """
    literacy = models.FloatField()
    math = models.FloatField()
    social = models.FloatField()
    physical = models.FloatField()


# child

# parent
class Parent(models.Model):
    """A parent has a first name, a last name, a username, a password, a email, a phone number, and an address"""
    """A parent has many children"""
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    username = models.CharField(max_length=30)
    password = models.CharField(max_length=30)
    email = models.EmailField(max_length=150)
    phone_number = models.CharField(max_length=10)
    address = models.CharField(max_length=150)

# intervention guide

# assessment

# organization
class Organization(models.Model):
    """An organization has a name, a email, a username, a phone number, an address, and a description"""
    """An organization has many many children"""
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=150)
    phone_number = models.CharField(max_length=10)
    address = models.CharField(max_length=150)
    description = models.CharField(max_length=500)

    child = models.ManyToManyField(Child)

# admin

class Guide(models.model):
    """A Guide has name, a username, an email, a phone number, and a description"""
    name = models.CharField(max_length = 200)
    username = models.CharField(max_length = 200)
    password = models.CharField(max_length = 200)
    email  = models.CharField(max_length = 200)
    phoneNumber = models.CharField(max_length = 200)
    description = models.TextField()


class Admin(models.model):
    """An admin has a name, and a username"""
    name = models.CharField(max_length = 200)
    username = models.CharField(max_length = 200)
    password = models.CharField(max_length = 200)