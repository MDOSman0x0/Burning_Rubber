from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import User
from .serializers import UserSerializer

# Create your views here.

@api_view(['GET'])
def getRoutes(request):
    
    routes = [
        {
            'Endpoint': '/users/',
            'method': 'GET',
            'body': None,
            'description': 'Returns an array of users'
        },
        {
            'Endpoint': '/users/id',
            'method': 'GET',
            'body': None,
            'description': 'Returns a single user object'
        },
        {
            'Endpoint': '/users/create/',
            'method': 'POST',
            'body': {'emailAddress': "", 'password': ""},
            'description': 'Creates new user with data sent in post request'
        },
        {
            'Endpoint': '/users/id/update/',
            'method': 'PUT',
            'body': {'emailAddress': "", 'password': ""},
            'description': 'Creates an existing user with data sent in post request'
        },
        {
            'Endpoint': '/users/id/delete/',
            'method': 'DELETE',
            'body': None,
            'description': 'Deletes and exiting note'
        },
    ]
    
    return Response(routes)

@api_view(['Get'])
def getUsers(request):
    users = User.objects.all()
    serializer = UserSerializer(users, many=True)
    return Response(serializer.data)

@api_view(['Get'])
def getUser(request, pk):
    users = User.objects.get(id=pk)
    serializer = UserSerializer(users, many=False)
    return Response(serializer.data)