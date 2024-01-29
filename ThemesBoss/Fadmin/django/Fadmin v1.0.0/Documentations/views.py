from django.shortcuts import render
from django.views import View

class DocsView(View):
    def get(self, request):
        metaData = {
            'dataCurrentPage':'documentation',
            'title': 'Documentation', 
            'breadcrumb': 'Fadmin',
            'description':'Nam libero tempore, cum soluta nobis'
        }
        return render(request,'documentation.html',metaData)

