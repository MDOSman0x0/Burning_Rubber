from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.views import APIView
from . models import *
from rest_framework.response import Response
from . serializer import *

class ReactView(APIView):
    serializer_class = ReviewSerializer

    def get(self, request):
        output = [{"rating":output.rating, "fullName":output.fullName, "vehicle":output.vehicle, "comments":output.comments, "img":output.img, "created":output.created}
                  for output in Review.objects.all()]
        return Response(output)
    
    def post(self,request):
        serializer = ReviewSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)