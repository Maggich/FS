from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response

from .models import Products
from .serializers import ProductSerializer

class ProductListView(APIView):

    def get(self, request):
        product = Products.objects.all()

        serializer = ProductSerializer(product, many=True)

        return Response(serializer.data)