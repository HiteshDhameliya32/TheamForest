from django.urls import path
from widget import views

urlpatterns = [
    path('<str:page>', views.WidgetView.as_view(), name='widget'),
]