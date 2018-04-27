from django.conf.urls import url, include
from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    #url(r'^getdata/', views.index2,name='index2'),
    url(r'^predictor/', views.predictor, name='predictor'),
    url(r'^lockbox/', views.lockbox, name='lockbox'),

]
