from django.shortcuts import render
from django.views import View

class BasicView(View):
    def get(self, request):
        metaData = {
            'dataCurrentPage': 'tables-basic',
            'title': 'Basic Tables', 
            'breadcrumb': 'Fadmin / Tables', 
            'description': 'Nam libero tempore, cum soluta nobis'
        }
        return render(request,'tables-basic.html',metaData)
    
class FootableView(View):
    def get(self, request):
        metaData = {
            'dataCurrentPage': 'tables-footable',
            'title': 'Sortable Table', 
            'breadcrumb': 'Fadmin / Tables', 
            'description': 'Nam libero tempore, cum soluta nobis'
        }
        return render(request,'tables-footable.html',metaData)
    
class ResponsiveView(View):
    def get(self, request):
        metaData = {
            'dataCurrentPage': 'tables-responsive',
            'title': 'Responsive Table', 
            'breadcrumb': 'Fadmin / Tables', 
            'description': 'Nam libero tempore, cum soluta nobis'
        }
        return render(request,'tables-responsive.html',metaData)