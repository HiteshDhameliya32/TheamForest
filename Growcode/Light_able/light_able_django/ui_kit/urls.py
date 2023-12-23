from django.urls import path
from ui_kit import views

urlpatterns = [
    path('<str:page>', views.UIView.as_view(), name='ui_kit'),
]