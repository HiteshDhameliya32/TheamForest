from django.urls import path

from Charts import views


urlpatterns = [
    path('chart-morris',views.ChartMorrisView.as_view(),name='charts-morris'),
    path('apexcharts',views.ApexChartView.as_view(),name='apexcharts'),
    path('echarts',views.EChartView.as_view(),name='echarts'),
]