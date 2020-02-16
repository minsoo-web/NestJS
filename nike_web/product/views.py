from django.shortcuts import render

# Create your views here.
def index(request):
    msg = 'My message'
    return render(request, 'product/index.html', {'message': msg})


def product(request):
    return render(request, 'product/product.html', {})


def cart(request):
    return render(request, 'product/cart.html', {})


def detail(request):
    return render(request, 'product/detail.html', {})


