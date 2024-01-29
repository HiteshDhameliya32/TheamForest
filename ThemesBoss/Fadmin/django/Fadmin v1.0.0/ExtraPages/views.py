from django.shortcuts import render
from django.views import View

class Pages400View(View):
    def get(self, request):
        # metaData = themeVar[page]
        return render(request,'pages-400.html')
    
class Pages403View(View):
    def get(self, request):
        # metaData = themeVar[page]
        return render(request,'pages-403.html')
    
class Pages500View(View):
    def get(self, request):
        # metaData = themeVar[page]
        return render(request,'pages-500.html')

class Pages503View(View):
    def get(self, request):
        # metaData = themeVar[page]
        return render(request,'pages-503.html')
    
class PagesLockScreenView(View):
    def get(self, request):
        # metaData = themeVar[page]
        return render(request,'pages-lock-screen.html')
    
class PagesLoginView(View):
    def get(self, request):
        # metaData = themeVar[page]
        return render(request,'pages-login.html')
    
class PagesRecoverypwView(View):
    def get(self, request):
        # metaData = themeVar[page]
        return render(request,'pages-recoverpw.html')

class PagesRegisterView(View):
    def get(self, request):
        # metaData = themeVar[page]
        return render(request,'pages-register.html')
