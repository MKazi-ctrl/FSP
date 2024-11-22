"""
URL configuration for core project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""


from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from content.views import UsersViewSet
from content.views import LoyaltyViewSet
from content.views import ProductViewSet
from content.views import PurchasesViewSet
from content.views import PurchaseDetailsViewSet
from content.views import SupportTicketViewSet
router = DefaultRouter()
router.register(r'users', UsersViewSet)
router.register(r'loyalty', LoyaltyViewSet)
router.register(r'product', ProductViewSet)
router.register(r'purchases', PurchasesViewSet)
router.register(r'purchasedetails', PurchaseDetailsViewSet)
router.register(r'support', SupportTicketViewSet )
urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
]
