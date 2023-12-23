from django.http import request
from django.shortcuts import redirect, render
from django.views import View
from utils import themeVar

#utility
class HomeView(View):
    def get(self, request):
        greeting = themeVar['dashboard']       
        return render(request, 'index.html',greeting)
