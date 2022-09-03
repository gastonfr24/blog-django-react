from apps.category.serializers import CategorySerializer

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import permissions
from rest_framework.pagination import PageNumberPagination

from .models import Category

class ListCategoryView(APIView):
    def get(self, request, format= None):
        
        # Si existe la categoría
        if Category.objects.all().exists():
            categories = Category.objects.all()
            result = []

            for category in categories:
                if not category.parent:
                    item = {}
                    item['id'] = category.id
                    item['name'] = category.name
                    item['thumbnail'] = category.thumbnail.url

                    item['subcategries'] = []
                    for cat in categories:
                        subitem = []
                        if cat.parent and cat.parent.id == category.id:
                            subitem['id'] = cat.id
                            subitem['name'] = cat.name
                            subitem['thumbnail'] = cat.thumbnail.url

                            item['subcategories'].append(subitem)

                    result.append(item)

            return Response({'categories':result}, status=status.HTTP_200_OK)
        else:
            return Response({'error':'No se han encotrado cateorías'},status=status.HTTP_500_INTERNAL_SERVER_ERROR)