from django.shortcuts import render
from django.views import View

class AlertView(View):
    def get(self, request):
        metaData = {
            'dataCurrentPage': 'ui-alerts',
            'title': 'Alerts', 
            'breadcrumb': 'Fadmin / Elements', 
            'description': 'Nam libero tempore, cum soluta nobis'
        }
        return render(request,'ui-alerts.html',metaData)

class ButtonView(View):
    def get(self, request):
        metaData = {
            'dataCurrentPage': 'ui-buttons',
            'title': 'Button', 
            'breadcrumb': 'Fadmin / Elements', 
            'description': 'Nam libero tempore, cum soluta nobis'
        }
        return render(request,'ui-buttons.html',metaData)
    
class CardView(View):
    def get(self, request):
        metaData = {
            'dataCurrentPage': 'ui-cards',
            'title': 'Card',
            'breadcrumb': 'Fadmin / Elements',
            'description': 'Nam libero tempore, cum soluta nobis'
        }
        return render(request,'ui-cards.html',metaData)

class GridView(View):
    def get(self, request):
        metaData = {
            'dataCurrentPage': 'ui-grid',
            'title': 'Grid', 
            'breadcrumb': 'Fadmin / Elements', 
            'description': 'Nam libero tempore, cum soluta nobis'
        }
        return render(request,'ui-grid.html',metaData)
    
class ProgressbarsView(View):
    def get(self, request):
        metaData = {
            'dataCurrentPage': 'ui-progressbars',
            'title': 'Progressbars', 
            'breadcrumb': 'Fadmin / Elements', 
            'description': 'Nam libero tempore, cum soluta nobis'
        }
        return render(request,'ui-progressbars.html',metaData)
    
class TabsAccordionsView(View):
    def get(self, request):
        metaData = {
            'dataCurrentPage': 'ui-tabs',
            'title': 'Tab & Accordions', 
            'breadcrumb': 'Fadmin / Elements', 
            'description': 'Nam libero tempore, cum soluta nobis'
        }
        return render(request,'ui-tabs-accordions.html',metaData)    
    
class TypographyView(View):
    def get(self, request):
        metaData = {
            'dataCurrentPage': 'ui-typography',
            'title': 'Typography', 
            'breadcrumb': 'Fadmin / Elements', 
            'description': 'Nam libero tempore, cum soluta nobis'
        }
        return render(request,'ui-typography.html',metaData)
