from django.urls import path

from myapp.views import home, drivers, business

urlpatterns = [
    path('', home, name="home"),
    path('drivers/', drivers, name="drivers"),
    path('business/', business, name="business"),
]