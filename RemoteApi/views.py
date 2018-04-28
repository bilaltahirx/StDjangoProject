from django.shortcuts import render
from django.shortcuts import get_object_or_404
from rest_framework.response import Response
from .models import RemoteInput
from rest_framework.views import APIView
from .serializers import RemoteInputSerializer
from mysite import settings as stcd
import smtplib
from .helperFuncs import *
# Create your views here.
import threading

class RemoteApiCall(APIView):
    xyz="1233"
    
    def get(self,request):
        x=RemoteInput()
        x.Address="Hello"
        x.Email="sdncdsn"
        x.FullBath=1
        x.HalfBath=2
        x.Bedrooms=1
        serializer=RemoteInputSerializer(x)
        return Response(serializer.data)


    def post(self,request):
        
        SA = request.POST.get('street-address')
        Email = request.POST.get('email')
        Unit = request.POST.get('unit')
        Bedrooms = request.POST.get('bedrooms')
        HalfBath=request.POST.get('half-baths')
        FullBath=request.POST.get('full-baths')
        t=threading.Thread(target=ThreadFunction,args=(SA,Unit,HalfBath,FullBath,Bedrooms,Email))
        t.start()
        #ThreadFunction(SA,Unit,HalfBath,FullBath,Bedrooms,Email)
        return render(request, 'personal/predictor.html')


 

    


