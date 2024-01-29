from django.urls import path

from VectorMaps import views


urlpatterns = [
    path('maps',views.MapsView.as_view(),name='maps'),
    
]