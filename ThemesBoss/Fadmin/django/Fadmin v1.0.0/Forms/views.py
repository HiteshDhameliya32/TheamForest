from django.shortcuts import render
from django.views import View

class ElementsView(View):
    def get(self, request):
        metaData = {
            'dataCurrentPage':'form-elements',
            'title': 'Form Elements', 
            'breadcrumb': 'Fadmin / Forms',
            'description':'Nam libero tempore, cum soluta nobis'
        }
        return render(request,'form-elements.html',metaData)

class MaskView(View):
    def get(self, request):
        metaData = {
            'dataCurrentPage':'form-mask',
            'title': 'Form Mask', 
            'breadcrumb': 'Fadmin / Forms',
            'description':'Nam libero tempore, cum soluta nobis'
        }
        return render(request,'form-mask.html',metaData)
    
class XeditableView(View):
    def get(self, request):
        metaData = {
            'dataCurrentPage':'form-xeditable',
            'title': 'Form Xeditable', 
            'breadcrumb': 'Fadmin / Forms',
            'description':'Nam libero tempore, cum soluta nobis'
        }
        return render(request,'form-xeditable.html',metaData)
