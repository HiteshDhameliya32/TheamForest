from django.urls import path

from Layouts import views


urlpatterns = [
    path('layout-blank',views.BlankView.as_view(),name='blank'),
    path('layout-boxed',views.BoxedView.as_view(),name='boxed'),
    path('layout-collapsed-sidebar',views.CollapsedSidebarView.as_view(),name='collapsed-sidebar'),
    path('layout-fixed-header',views.FixedHeaderView.as_view(),name='fixed-header'),
    path('layout-fixed-sidebar-header',views.FixedSidebarHeaderView.as_view(),name='fixed-sidebar-header'),
    path('layout-fixed-sidebar',views.FixedSidebarView.as_view(),name='fixed-sidebar'),
    
]