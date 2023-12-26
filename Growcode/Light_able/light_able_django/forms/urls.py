from django.urls import path
from forms import views

urlpatterns = [
    path('<str:page>', views.FormsView.as_view(), name='forms'),
]