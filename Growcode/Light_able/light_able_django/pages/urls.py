from django.urls import path
from pages import views

urlpatterns = [
    path('<str:page>', views.PagesView.as_view(), name='pages'),
]