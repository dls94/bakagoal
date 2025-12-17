from os import name
from django.urls import path
from vitrine.views import article_views as views


urlpatterns = [
    
    path('', views.getArticles, name='articles'),
    path('create/', views.createArticle, name='create-article'),
    path('upload/', views.uploadImage, name='upload-image'),

   
    
    path('<str:pk>/', views.getArticle, name='article'),
    path('delete/<str:pk>/', views.deleteArticle, name='article-delete'), 
    path('update/<str:pk>/', views.updateArticle, name='update-article'),
]