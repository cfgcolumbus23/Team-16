# from django.conf.urls import url
from django.urls import path, include
from .views import (
    ChildListApiBaseView,
    ChildListApiView
)

urlpatterns = [
    path('api', ChildListApiBaseView.as_view()),
    path('api/parentToChildren/<int:parent_id>/', ChildListApiView.as_view())
]