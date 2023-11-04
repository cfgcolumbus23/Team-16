from django.db import models

class Child(models.Model):
    """A child has a first name, a last name, a birthdate, a parent, and a guide"""
    """A child has many assessments and many organizations"""
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    birthdate = models.DateField()
    parent = models.ForeignKey("Parent", on_delete=models.CASCADE)
    guide = models.ForeignKey("Guide", on_delete=models.CASCADE)
    assessement = models.ManyToManyField("Assessment", through="AssessmentDetail")

class Assessment(models.Model):
    """An assessment has a name, a date, a child, and a guide"""
    """An assessment has many children that take it"""
    date = models.DateField()
    age_group = models.FloatField()

class AssessmentDetail(models.Model):
    """An assessment detail has a literacy score, a math score, a social score, a physical score, an overall score, a child, and an assessment"""
    """Assessment detail is the relationship between an assessment and a child"""
    literacy = models.FloatField()
    math = models.FloatField()
    social = models.FloatField()
    physical = models.FloatField()
    overall = models.FloatField()
    child = models.ForeignKey("Child", on_delete=models.CASCADE)
    assessment = models.ForeignKey("Assessment", on_delete=models.CASCADE)

class Parent(models.Model):
    """A parent has a first name, a last name, an email, a phone number, and an address"""
    """A parent has many children and one login"""
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    email = models.EmailField(max_length=150)
    phone_number = models.CharField(max_length=10)
    address = models.CharField(max_length=150)
    login = models.OneToOneField("Login", on_delete=models.CASCADE)

class Organization(models.Model):
    """An organization has a name, an email, a phone number, an address, and a description"""
    """An organization has many children"""
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=150)
    phone_number = models.CharField(max_length=10)
    address = models.CharField(max_length=150)
    description = models.CharField(max_length=500)
    child = models.ManyToManyField(Child)
    login = models.OneToOneField("Login", on_delete=models.CASCADE)

class Guide(models.Model):
    """A guide has a first name, a last name, an email, a phone number, and a description"""
    """A guide has many children and many assessments and one login"""
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    email = models.CharField(max_length = 200)
    phone_number = models.CharField(max_length = 200)
    description = models.TextField()
    login = models.OneToOneField("Login", on_delete=models.CASCADE)

class Admin(models.Model):
    """An admin has one login"""
    login = models.OneToOneField("Login", on_delete=models.CASCADE)

class Login(models.Model):
    """A login has a username and a password"""
    username = models.CharField(max_length = 200)
    password = models.CharField(max_length = 200)


class Notes(models.Model):
    """A Notes has a child, an organization, a note, and a date"""
    child = models.ForeignKey("Child", on_delete=models.CASCADE)
    organization = models.ForeignKey("Organization", on_delete=models.CASCADE)
    note = models.TextField()
    date = models.DateField()