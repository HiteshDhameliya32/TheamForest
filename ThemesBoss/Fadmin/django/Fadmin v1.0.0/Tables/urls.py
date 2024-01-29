from django.urls import path

from Tables import views


urlpatterns = [
    path('tables-basic',views.BasicView.as_view(),name='basic'),
    path('tables-footable',views.FootableView.as_view(),name='footable'),
    path('tables-responsive',views.ResponsiveView.as_view(),name='responsive'),
    
]