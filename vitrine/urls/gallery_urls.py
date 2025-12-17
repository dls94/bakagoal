from os import name
from django.urls import path
from vitrine.views import gallery_views as views


urlpatterns = [
    
    path('', views.getGallerys, name='gallerys'),
    path('create/', views.createGallery, name='create-gallery'),
    path('upload/', views.uploadImage, name='upload-image'),

   
    
    path('<str:pk>/', views.getGallery, name='gallery'),
    path('delete/<str:pk>/', views.deleteGallery, name='gallery-delete'), 
    path('update/<str:pk>/', views.updateGallery, name='update-gallery'),
]