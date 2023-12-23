from django.shortcuts import render
from django.views import View
# Create your views here.


class UIView(View):
    def get(self, request,page):
        greeting = {}
        greeting['heading'] = "Live Preview | Light Able Dashboards"
        greeting['pageview'] = "Dashboards"        
        greeting['breadcrumb_item'] = 'Ui Kit'
        greeting['breadcrumb_item_active'] = page.capitalize()   
        greeting['pc_dark_layout'] = 'default'
        return render(request,'ui-kit/'+ page + '.html',greeting)
