from django.shortcuts import render
from django.views import View
from utils import themeVar


class ChartView(View):
    def get(self, request,page):
        greeting = themeVar[page]
        return render(request,'chart/'+ page + '.html',greeting)
