
import numpy as np
import pandas as pd
from sklearn.preprocessing import LabelEncoder
from sklearn.preprocessing import OneHotEncoder
import pickle
import os
import gc
from sklearn.metrics import mean_squared_error
from sklearn.metrics import mean_absolute_error
from sklearn.model_selection import KFold
from sklearn.model_selection import cross_val_score
import xgboost as xgb
import lightgbm as gbm
from sklearn.linear_model import ElasticNet, Lasso,  BayesianRidge, LassoLarsIC
from sklearn.ensemble import RandomForestRegressor,  GradientBoostingRegressor
from sklearn.kernel_ridge import KernelRidge
from sklearn.pipeline import make_pipeline
from mysite import settings as stcd
import smtplib
import warnings
def ignore_warn(*args, **kwargs):
    pass
warnings.warn = ignore_warn #ignore annoying warning (from sklearn and seaborn)

target_feature = 'Price'
cate_features = ['ZipCode', 'Block', 'Elevator', 'PTDoorman', 'FTDoorman', 
                 'UnspecDoorman', 'PetsAllow', 'CatsOnly', 'NoDogs', 'Coop', 
                 'Laundry in Building', "Children's Playroom", 'Bike Room', 
                 'Parking', 'Gym', 'Live-in Super', 'Cold Storage', 
                 'Storage Available', 'Virtual Doorman', 
                 'Community Recreation Facilities', 'Package Room', 
                 'Green Building', 'Smoke-free', 'Hot Tub', 'Swimming Pool', 
                 'Valet', 'Media Room', 'Valet Parking', 'Waterfront', 
                 'OutGarden', 'OutPatio', 'OutDeck', 'OutOther', 'Storm Zone', 
                 'Unit', 'No Fee', 'Rooms', '0BED', '1BED', '2BED', '3BED', 
                 '4BED', '5PLUSBED', 'Full Baths', 'Half Baths', 'ZoneShort', 
                 'SpDist1', 'Class1', 'NumBldg', 'NumFlr', 'ResUni', 'TotUni', 
                 'Era', 'Updated', 'HD', 'Lmbin']
cont_features = ['SqFt', 'ResArea', 'ComArea', 'AssessVal']

dummies_features = ['ZipCode', 'Rooms', 'Full Baths', 'NumFlr', 'ResUni', 'Era',
                    'Storm Zone']

eliminated_features = ['OutGarden']



def process_data(data_df):
    data_x = None
    data_y = None
    _fill_NA(data_df)
    _remove_outlier(data_df)
    _eliminate_features(data_df)
    _normalize(data_df)
    _encoding(data_df)
    global property_id
    property_id = data_df['Property ID'].values
    data_y = data_df['Price']
    data_x = data_df.drop(['Property ID', 'Price'], axis=1)
    del data_df
    gc.collect()    
        
    return data_x, data_y

def _load_data():
    data_df = pd.read_excel(os.path.join(stcd.PROJECT_ROOT, 'Revised_Data_Set_12517_Distro.xlsx'), dtype={'Property ID': object})
    for column in data_df.columns:
        if data_df[column].dtype == np.int64:
                data_df[column] = data_df[column].astype(np.int32)
        if data_df[column].dtype == np.float64:
            data_df[column] = data_df[column].astype(np.float32)
    data_df['Price'] = data_df['Price'].astype(np.float32)        
    return data_df

def _fill_NA(data_df):
    for feature in cate_features:
        data_df[feature] = data_df[feature].fillna("None")
    for feature in cont_features:
        data_df[feature] = data_df[feature].fillna(0)
def _remove_outlier(data_df):
    data_df.drop(data_df[data_df['Price'] > 100000].index, axis=0, inplace=True)
    data_df.drop(data_df[data_df['SqFt'] > 17500].index, axis=0, inplace=True)
    data_df.drop(data_df[data_df['ResArea'] > 2e6].index, axis=0, inplace=True)
    data_df.drop(data_df[data_df['ComArea'] > 1400000].index, axis=0, inplace=True)
    data_df.drop(data_df[data_df['AssessVal'] > 3e8].index, axis=0, inplace=True)
    
def _normalize(data_df):
    global actual_price
    actual_price = data_df['Price'].copy()
    data_df['Price'] = np.log1p(data_df['Price'])
    
def _eliminate_features(data_df):
    data_df = data_df.drop(eliminated_features, axis=1, inplace=True)
    
def _encoding(data_df):
    for feature in cate_features:
        if feature not in eliminated_features:
            data_df[feature] = data_df[feature].apply(str)
        
    encoders = []
    features = []
    for feature in data_df:
        encoder = None
        
        if (feature in cate_features) and (feature not in eliminated_features):
            encoder = LabelEncoder()
            encoder.fit(list(data_df[feature].values))
            data_df[feature] = encoder.transform(list(data_df[feature].values))
        
        if feature is not 'Price':
            encoders.append(encoder)
            features.append(feature)
    for feature in dummies_features:
        onehot = pd.get_dummies(data_df[feature])
        data_df.drop([feature], axis=1, inplace=True)
        for i in range(onehot.shape[1]):
            data_df[feature+'_{}'.format(i)] = onehot[i]
        
    
    
def predict(data_x, model):
    y_pred = model.predict(data_x)
    return np.expm1(y_pred)


def getValuePredictions(id,unit,hb,fb,beds):
    Address = pd.read_excel(os.path.join(stcd.PROJECT_ROOT, 'List_All_Addresses.xlsx'), dtype={'Property ID': object})
    j=Address.loc[Address['Address']==id]
    count=j.shape[0]
    if count != 0:

        id=j['Code'].iloc[0]    
        data_df = _load_data()
        k=data_df.loc[data_df['Property ID'] == id]
        k['Unit']=int(unit)
        k['Full Baths']=int(fb)
        k['Half Baths']=int(hb)
        k['Rooms']=int(beds)
    #print(k.shape)
        data_dfx=pd.concat([data_df, k])
        data_x, data_y = process_data(data_dfx)
        model = pickle.load(open(os.path.join(stcd.PROJECT_ROOT, 'models.pickle'), 'rb')) 
        y=predict(data_x, model)
        return y
    else:
        return [1]

def ThreadFunction(a,b,c,d,e,f):
    Email=f
    j=getValuePredictions(a,b,c,d,e)

    if len(j)<10:
        gmail_user = "hitestmailsite@gmail.com"  
        gmail_password = "1Islamabad1"
        server = smtplib.SMTP_SSL('smtp.gmail.com', 465)
        server.ehlo()
        server.login(gmail_user, gmail_password)
        server.sendmail("hitestmailsite@gmail.com", Email, "No reccord found for it . we are working on it")
    else:
        gmail_user = "hitestmailsite@gmail.com"  
        gmail_password = "1Islamabad1"
        server = smtplib.SMTP_SSL('smtp.gmail.com', 465)
        server.ehlo()
        server.login(gmail_user, gmail_password)
        server.sendmail("hitestmailsite@gmail.com", Email, "Predicted Price is = "+ str(j[-1]))
        x=123
