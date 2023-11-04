# Generated by Django 4.2.7 on 2023-11-04 01:56

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Assessment',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.DateField()),
                ('age_group', models.FloatField()),
            ],
        ),
        migrations.CreateModel(
            name='AssessmentDetail',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('literacy', models.FloatField()),
                ('math', models.FloatField()),
                ('social', models.FloatField()),
                ('physical', models.FloatField()),
                ('overall', models.FloatField()),
                ('assessment', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='request_data.assessment')),
            ],
        ),
        migrations.CreateModel(
            name='Child',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(max_length=30)),
                ('last_name', models.CharField(max_length=30)),
                ('birthdate', models.DateField()),
                ('assessement', models.ManyToManyField(through='request_data.AssessmentDetail', to='request_data.assessment')),
            ],
        ),
        migrations.CreateModel(
            name='Login',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('username', models.CharField(max_length=200)),
                ('password', models.CharField(max_length=200)),
            ],
        ),
        migrations.CreateModel(
            name='Parent',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(max_length=30)),
                ('last_name', models.CharField(max_length=30)),
                ('email', models.EmailField(max_length=150)),
                ('phone_number', models.CharField(max_length=10)),
                ('address', models.CharField(max_length=150)),
                ('login', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='request_data.login')),
            ],
        ),
        migrations.CreateModel(
            name='Organization',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('email', models.EmailField(max_length=150)),
                ('phone_number', models.CharField(max_length=10)),
                ('address', models.CharField(max_length=150)),
                ('description', models.CharField(max_length=500)),
                ('child', models.ManyToManyField(to='request_data.child')),
            ],
        ),
        migrations.CreateModel(
            name='Guide',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(max_length=30)),
                ('last_name', models.CharField(max_length=30)),
                ('email', models.CharField(max_length=200)),
                ('phone_number', models.CharField(max_length=200)),
                ('description', models.TextField()),
                ('login', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='request_data.login')),
            ],
        ),
        migrations.AddField(
            model_name='child',
            name='guide',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='request_data.guide'),
        ),
        migrations.AddField(
            model_name='child',
            name='parent',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='request_data.parent'),
        ),
        migrations.AddField(
            model_name='assessmentdetail',
            name='child',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='request_data.child'),
        ),
        migrations.CreateModel(
            name='Admin',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('login', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='request_data.login')),
            ],
        ),
    ]
