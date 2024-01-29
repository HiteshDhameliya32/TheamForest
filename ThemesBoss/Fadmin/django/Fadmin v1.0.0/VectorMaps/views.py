from django.shortcuts import render
from django.views import View

class MapsView(View):
    def get(self, request):
        metaData = {
            'dataCurrentPage':'maps',
            'title': 'Vector Maps',
            'breadcrumb': 'Fadmin',
            'description': 'Nam libero tempore, cum soluta nobis'
        }
        return render(request,'maps.html',metaData)
