from django.shortcuts import render
from django.views import View

class DripiconsView(View):
    def get(self, request):
        metaData = {
            'dataCurrentPage':'icons-dripicons',
            'title': 'Dripicons Icons', 
            'breadcrumb': 'Fadmin / Icon',
            'description':'Nam libero tempore, cum soluta nobis'
        }
        return render(request,'icons-dripicons.html',metaData)

class FeatherView(View):
    def get(self, request):
        metaData = {
            'dataCurrentPage':'icons-feather',
            'title': 'Feather Icons', 
            'breadcrumb': 'Fadmin / Icon',
            'description':'Nam libero tempore, cum soluta nobis'
        }
        return render(request,'icons-feather.html',metaData)

class FontawesomeView(View):
    def get(self, request):
        metaData = {
            'dataCurrentPage':'icons-fontawesome',
            'title': 'Font Awesome', 
            'breadcrumb': 'Fadmin / Icon',
            'description':'Nam libero tempore, cum soluta nobis'
        }
        return render(request,'icons-fontawesome.html',metaData)

class IonView(View):
    def get(self, request):
        metaData = {
            'dataCurrentPage':'icons-ion',
            'title': 'Ion Icons', 
            'breadcrumb': 'Fadmin / Icon',
            'description':'Nam libero tempore, cum soluta nobis'
        }
        return render(request,'icons-ion.html',metaData)

class MatirialView(View):
    def get(self, request):
        metaData = {
            'dataCurrentPage':'icons-material',
            'title': 'Material Design Icons', 
            'breadcrumb': 'Fadmin / Icon',
            'description':'Nam libero tempore, cum soluta nobis'
        }
        return render(request,'icons-material.html',metaData)

class ThemifyView(View):
    def get(self, request):
        metaData = {
            'dataCurrentPage':'icons-themify',
            'title': 'Themify Icons', 
            'breadcrumb': 'Fadmin / Icon',
            'description':'Nam libero tempore, cum soluta nobis'
        }
        return render(request,'icons-themify.html',metaData)

class TypiconsView(View):
    def get(self, request):
        metaData = {
            'dataCurrentPage':'icons-typicons',
            'title': 'Typicons Icons', 
            'breadcrumb': 'Fadmin / Icon',
            'description':'Nam libero tempore, cum soluta nobis'
        }
        return render(request,'icons-typicons.html',metaData)