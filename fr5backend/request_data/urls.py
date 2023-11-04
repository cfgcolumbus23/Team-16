# from django.conf.urls import url
from django.urls import path, include
from .views import (
    ChildListApiView,
)

urlpatterns = [
    path('api', ChildListApiView.as_view()),
]