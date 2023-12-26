from django.shortcuts import render
from django.views import View
from utils import themeVar
# Create your views here.


class OtherView(View):
    def get(self, request,page):
        greeting = themeVar[page]
        return render(request,'other/'+ page + '.html',greeting)
