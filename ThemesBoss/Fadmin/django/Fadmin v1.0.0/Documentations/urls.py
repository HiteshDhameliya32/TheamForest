from django.urls import path

from Documentations import views


urlpatterns = [
    path('documentation',views.DocsView.as_view(),name='documentation'),
    
]