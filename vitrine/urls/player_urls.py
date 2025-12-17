from os import name
from django.urls import path
from vitrine.views import player_views as views

urlpatterns = [
    path('', views.getPlayers, name='players'),

    path('create/', views.createPlayer, name='product-create'),
    path('create/', views.createPlayer, name='player-create'),

    path('upload/', views.uploadImage, name='upload-image'),

    path('<str:pk>/', views.getPlayer, name='player'),

    path('delete/<str:pk>/', views.deletePlayer, name='player-delete'),
    path('update/<str:pk>/', views.updatePlayer, name='player-update'),
]