from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Product
from .serializers import ProductSerializer


@api_view(['GET'])
def get_apis(request):
    routes = [
        'api/products',
        'api/products/<id>',
        'api/products/create',
        'api/products/update/<id>',
        'api/products/delete/<id>',
    ]
    return Response(routes)


@api_view(['GET'])
def get_all_products(request):
    products = Product.objects.all()
    serialized_data = ProductSerializer(products, many=True)
    return Response(serialized_data.data)


