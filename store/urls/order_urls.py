from os import name
from django.urls import path
from store.views import order_views as views


urlpatterns = [
    path('', views.getOrders, name='myorders'),
    path('add/', views.addOrderItems, name='orders-add'),
    path('myorders/', views.getMyOrders, name='myorders'),

    path('<str:pk>/deliver/', views.updateOrderToDelivered, name='order-delivered'),
    path('<str:pk>/', views.getOrderById, name='user-order'),
    path('<str:pk>/pay/', views.updateOrderToPaid, name='pay')
]