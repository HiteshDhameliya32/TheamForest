from django.shortcuts import render
from django.views import View

class BlankView(View):
    def get(self, request):
        metaData = {
            'dataCurrentPage':'layout-blank',
            'title': 'Blank Page', 
            'breadcrumb': 'Fadmin / Layout',
            'description':'Nam libero tempore, cum soluta nobis'
        }
        return render(request,'layout-blank.html',metaData)
    
class BoxedView(View):
    def get(self, request):
        metaData = {
            'dataCurrentPage':'layout-boxed',
            'title': 'Boxed Layout', 
            'breadcrumb': 'Fadmin / Layout',
            'description':'Nam libero tempore, cum soluta nobis'
        }
        return render(request,'layout-boxed.html',metaData)
    
class CollapsedSidebarView(View):
    def get(self, request):
        metaData = {
            'dataCurrentPage':'layout-collapsed-sidebar',
            'title': 'Collapsed Sidebar', 
            'breadcrumb': 'Fadmin / Layout',
            'description':'Nam libero tempore, cum soluta nobis'
        }
        return render(request,'layout-collapsed-sidebar.html',metaData)
    
class FixedHeaderView(View):
    def get(self, request):
        metaData = {
            'dataCurrentPage':'layout-fixed-header',
            'title': 'Fixed Header', 
            'breadcrumb': 'Fadmin / Layout',
            'description':'Nam libero tempore, cum soluta nobis'
        }
        return render(request,'layout-fixed-header.html',metaData)
    
class FixedSidebarHeaderView(View):
    def get(self, request):
        metaData = {
            'dataCurrentPage': 'layout-fixed-sidebar-header',
            'title': 'Fixed Sidebar & Header', 
            'breadcrumb': 'Fadmin / Layout', 
            'description': 'Nam libero tempore, cum soluta nobis'
        }
        return render(request,'layout-fixed-sidebar-header.html',metaData)
    
class FixedSidebarView(View):
    def get(self, request):
        metaData = {
            'dataCurrentPage': 'layout-fixed-sidebar',
            'title': 'Fixed Sidebar', 
            'breadcrumb': 'Fadmin / Layout', 
            'description': 'Nam libero tempore, cum soluta nobis'
        }
        return render(request,'layout-fixed-sidebar.html',metaData)
