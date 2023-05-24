from django.shortcuts import render
from django.shortcuts import get_object_or_404
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


@api_view(['GET'])
def get_single_product(request, product_id):
    product = get_object_or_404(Product, _id=product_id)
    serialized_data = ProductSerializer(product, many=False)
    return Response(serialized_data.data)


