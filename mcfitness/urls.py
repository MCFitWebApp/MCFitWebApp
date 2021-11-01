from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
import frontend

urlpatterns = [
    path('', include('frontend.urls')),
    path('accounts/', include('allauth.urls')),
]
