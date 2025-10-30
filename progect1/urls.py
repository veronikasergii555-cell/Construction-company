
from django.urls import path
from portfolio import views



# импортируем файл views.py


urlpatterns = [
    path('', views.home, name='home'),  # используем функцию home из views.py
]
