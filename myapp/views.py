from django.shortcuts import render

# Create your views here.

def home(request):
    return render(request, 'index.html')

def drivers(request):
    return render(request, 'drivers.html')

def business(request):
    return render(request, 'business.html')


