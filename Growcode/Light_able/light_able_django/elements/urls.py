from django.urls import path
from elements import views

urlpatterns = [
    path('<str:page>', views.ElementsView.as_view(), name='elements'),
]