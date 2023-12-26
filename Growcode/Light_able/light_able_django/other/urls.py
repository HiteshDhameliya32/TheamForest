from django.urls import path
from other import views

urlpatterns = [
    path('<str:page>', views.OtherView.as_view(), name='ohter'),
]