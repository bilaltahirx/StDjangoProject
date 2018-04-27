from django.shortcuts import render
from django.http import HttpResponse
import pandas as pd
import os
from mysite import settings as stcd
from sklearn.preprocessing import LabelEncoder
from sklearn.preprocessing import OneHotEncoder
import pickle
import os
import gc

def index(request):
    return render(request, 'personal/home.html')

def helper():
    return "I work"

def lockbox(request):
    return render(request, 'personal/lockbox.html')
def predictor(request):
    #addr_df = pd.read_excel(static, dtype={'Property ID': object})
    #addr_df = pd.read_excel(os.path.join(stcd.PROJECT_ROOT, 'List_All_Addresses.xlsx'), dtype={'Property ID': object})
    #model = pickle.load(open(os.path.join(stcd.PROJECT_ROOT, 'models.pickle'), 'rb')) 
    #k=helper();
    #if post request came
    if request.method == 'POST':
        #getting values from post
        #addr_df = pd.read_excel(os.path.join(stcd.PROJECT_ROOT, 'List_All_Addresses.xlsx'), dtype={'Property ID': object})

        #StreetAddress = request.POST.get('street-address')
        #Email = request.POST.get('email')
        #Unit = request.POST.get('unit')
        #Bedrooms = request.POST.get('bedrooms')
        #HalfBath=request.POST.get('half-baths')
        #FullBath=request.POST.get('full-baths')
        k=helper();

    else:
        #if post request is not true
        #returing the form template
        return render(request, 'personal/predictor.html')
