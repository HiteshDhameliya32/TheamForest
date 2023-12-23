from django.shortcuts import render
from django.views import View
from utils import themeVar
# Create your views here.

class FormsView(View):
    def get(self, request,page):
        greeting = themeVar[page]
        return render(request,'forms/'+ page + '.html',greeting)
