from django.urls import path

from ExtraPages import views


urlpatterns = [
    path('pages-400',views.Pages400View.as_view(),name='400'),
    path('pages-403',views.Pages403View.as_view(),name='403'),
    path('pages-404',views.Pages403View.as_view(),name='404'),
    path('pages-500',views.Pages500View.as_view(),name='500'),
    path('pages-503',views.Pages503View.as_view(),name='503'),
    path('pages-lock-screen',views.PagesLockScreenView.as_view(),name='lock-screen'),
    path('pages-login',views.PagesLoginView.as_view(),name='login'),
    path('pages-recoverpw',views.PagesRecoverypwView.as_view(),name='recoverpw'),
    path('pages-register',views.PagesRegisterView.as_view(),name='register'),
    
]