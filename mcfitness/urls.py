from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
import MCFit

urlpatterns = [
    path('', include('MCFit.urls')),
    path('accounts/', include('allauth.urls')),
]
