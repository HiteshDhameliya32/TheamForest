from django.urls import path
from application import views

urlpatterns = [
    path('<str:page>', views.AppplicationView.as_view(), name='application'),
]