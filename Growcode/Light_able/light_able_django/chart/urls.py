from django.urls import path
from chart import views

urlpatterns = [
    path('<str:page>', views.ChartView.as_view(), name='chart'),
]