from django.urls import path
from . import views

urlpatterns = [
    path('', views.get_apis),
    path('products/', views.get_all_products),
    path('products/<str:product_id>', views.get_single_product),
]
