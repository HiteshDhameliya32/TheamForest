from django.shortcuts import render
from django.views import View
from utils import themeVar
# Create your views here.

class ElementsView(View):
    def get(self, request,page):
        greeting = themeVar[page]
        return render(request,'elements/'+ page + '.html',greeting)
