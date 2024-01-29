from django.urls import path

from UIElements import views


urlpatterns = [
    path('ui-alerts',views.AlertView.as_view(),name='ui-alerts'),
    path('ui-buttons',views.ButtonView.as_view(),name='ui-button'),
    path('ui-cards',views.CardView.as_view(),name='ui-card'),
    path('ui-grid',views.GridView.as_view(),name='ui-grid'),
    path('ui-progressbars',views.ProgressbarsView.as_view(),name='ui-progressbars'),
    path('ui-tabs-accordions',views.TabsAccordionsView.as_view(),name='ui-tabs-accordions'),
    path('ui-typography',views.TypographyView.as_view(),name='ui-typography'),
]