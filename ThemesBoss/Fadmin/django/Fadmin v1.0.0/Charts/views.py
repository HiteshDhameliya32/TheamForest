from django.shortcuts import render
from django.views import View

class ChartMorrisView(View):
    def get(self, request):
        metaData = {
            'dataCurrentPage':'chart-morris',
            'title': 'Morris Chart', 
            'breadcrumb': 'Fadmin / Charts',
            'description':'Nam libero tempore, cum soluta nobis'
        }
        return render(request,'chart-morris.html')
    
class ApexChartView(View):
    def get(self, request):
        metaData = {
            'dataCurrentPage':'apexcharts',
            'title': 'Apexcharts', 
            'breadcrumb': 'Fadmin / Charts',
            'description':'Nam libero tempore, cum soluta nobis'
        }
        return render(request,'apexcharts.html',metaData)
    
class EChartView(View):
    def get(self, request):
        metaData = {
            'dataCurrentPage':'echats',
            'title': 'Echarts', 
            'breadcrumb': 'Fadmin / Charts',
            'description':'Nam libero tempore, cum soluta nobis'
        }
        return render(request,'echarts.html',metaData)
