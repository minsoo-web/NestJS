
from django.urls import path
from . import views

app_name = "order"

urlpatterns = [
    path('checkout1/', views.Checkout1View.as_view(), name='checkout1'),
    path('checkout2/', views.Checkout2View.as_view(), name='checkout2'),
    path('to-checkout1/', views.ToCheckout1.as_view(), name='to-checkout1'),
    path('to-checkout2/', views.ToCheckout2.as_view(), name='to-checkout2'),
    path('checkout/', views.checkout, name='checkout'),
    path('shipping/', views.Shippings, name='shipping'),
    path('shipping-show/', views.ShippingShow, name='shipping-show'),
]
