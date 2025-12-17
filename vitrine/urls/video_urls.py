from os import name
from django.urls import path
from vitrine.views import video_views as views


urlpatterns = [

    path('', views.getVideos, name='videos'),
    path('create/', views.createVideo, name='create-video'),
    path('upload/', views.uploadImage, name='upload-image'),

    
    path('<str:pk>/', views.getVideo, name='Video'),
    path('delete/<str:pk>/', views.deleteVideo, name='video-delete'), 
    path('update/<str:pk>/', views.updateVideo, name='update-Video'),
]
   

