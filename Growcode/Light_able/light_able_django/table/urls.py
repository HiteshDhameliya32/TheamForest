from django.urls import path
from table import views

urlpatterns = [
    path('<str:page>', views.TablesView.as_view(), name='tables'),
]