from django.urls import path

from Icons import views


urlpatterns = [
    path('icons-dripicons',views.DripiconsView.as_view(),name='dripicons'),
    path('icons-feather',views.FeatherView.as_view(),name='feather'),
    path('icons-fontawesome',views.FontawesomeView.as_view(),name='fontawesome'),
    path('icons-ion',views.IonView.as_view(),name='ion'),
    path('icons-material',views.MatirialView.as_view(),name='material'),
    path('icons-themify',views.ThemifyView.as_view(),name='themify'),
    path('icons-typicons',views.TypiconsView.as_view(),name='typicons'),
    
    
]