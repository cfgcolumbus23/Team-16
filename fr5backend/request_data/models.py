from django.db import models

# Create your models here.


# child

# parent
class Parent(models.Model):
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    username = models.CharField(max_length=30)
    email = models.EmailField(max_length=150)
    phone_number = models.CharField(max_length=10)
    address = models.CharField(max_length=150)


# intervention guide

# assessment

# organization
class Organization(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=150)
    phone_number = models.CharField(max_length=10)
    address = models.CharField(max_length=150)
    description = models.CharField(max_length=500)


# admin