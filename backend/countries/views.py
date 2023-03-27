from django.shortcuts import render
from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser
from rest_framework import status
from rest_framework.response import Response

from countries.models import Countries
from countries.serializers import CountriesSerializer
from rest_framework.decorators import api_view
from django.shortcuts import get_object_or_404


@api_view( [ "GET", "POST" ])
def countries_list(request):
    if request.method == "GET":
        countries = Countries.objects.all()
    
        name = request.GET.get("name", None)
        if name is not None:
            countries = countries.filter(name__icontsins=name)  #this django filter is explained below.  
        
        countries_serializer = CountriesSerializer(countries, many=True)
        return Response(countries_serializer.data)
        # "SAFE=FALSE" FOR OBJECTS SERIALIZATION
    elif request.method == "POST":
        countries_data = JSONParser().parse(request)
        countries_serializer = CountriesSerializer(data=countries_data)
        if countries_serializer.is_valid():
            countries_serializer.save()
            return Response(countries_serializer.data, status=status.HTTP_201_CREATED)
        return Response(countries_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
       
        
    # LINE 17-19 EXPLAINED
    # Django filter allows users to filter down a queryset based on a model's fields.
    # The "icontains" checks if either the name of the description field contains the value of the 
    # search_terms.
 
@api_view( [ "GET", "PUT", "DELETE"])
def countries_detail(request, pk):    
    countries = get_object_or_404(Countries, pk=pk)        
    if request.method == "GET":
        countries_serializer = CountriesSerializer(countries);
        return Response(countries_serializer.data)        
    elif request.method == "PUT":
        countries_data = JSONParser().parse(request)
        countries_serializer = CountriesSerializer(countries, data=countries_data);
        countries_serializer.is_valid(raise_exception=True) 
        countries_serializer.save()
        return Response (countries_serializer.data)      
    elif request.method == "DELETE":
        countries.delete()
        return Response ({'message': "Country was deleted successfully"}, status=status.HTTP_204_NO_CONTENT)
        
            
                
        
    
        