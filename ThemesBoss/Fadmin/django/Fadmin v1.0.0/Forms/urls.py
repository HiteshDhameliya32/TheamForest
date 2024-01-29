from django.urls import path

from Forms import views


urlpatterns = [
    path('form-elements',views.ElementsView.as_view(),name='elements'),
    path('form-mask',views.MaskView.as_view(),name='mask'),
    path('form-xeditable',views.XeditableView.as_view(),name='xeditable'),
    
]