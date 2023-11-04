from django.contrib import admin
from django.urls import path, include
from request_data import urls as request_data_urls

urlpatterns = [
    path("admin/", admin.site.urls),
    # path("api/", include(request_data_urls)),
    path("api-auth/", include("rest_framework.urls")),
    path("request_data/", include("request_data.urls"))
]