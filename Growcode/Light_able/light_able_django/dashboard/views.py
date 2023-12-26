from django.shortcuts import render
from django.views import View
from utils import themeVar
# Create your views here.

class DashboardView(View):
    def get(self, request):
        greeting = themeVar['dashboard']    
        return render(request, 'dashboard/index.html',greeting)