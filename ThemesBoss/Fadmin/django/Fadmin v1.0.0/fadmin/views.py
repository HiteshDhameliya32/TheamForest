from django.http import request
from django.shortcuts import redirect, render
from django.views import View


#utility
class HomeView(View):
    def get(self, request):
        metaData = {
            'dataCurrentPage':'index',
            'title': 'Dashborad', 
            'breadcrumb': 'Fadmin',
            'description':'Nam libero tempore, cum soluta nobis'
        }      
        return render(request, 'index.html',metaData)
    
class ChangeLogView(View):
    def get(self, request):
        metaData = {
            'dataCurrentPage':'changelog',
            'title': 'Changelog', 
            'breadcrumb': 'Fadmin',
            'description':'Nam libero tempore, cum soluta nobis'
        }
        return render(request,'changelog.html',metaData)
