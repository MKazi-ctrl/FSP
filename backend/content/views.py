from django.shortcuts import render

# Create your views here.

from rest_framework import viewsets
from .models import Users
from .models import Loyalty
from .models import Product
from .models import Purchases
from .models import PurchaseDetails
from .models import SupportTicket
from .serializers import UsersSerializer
from .serializers import LoyaltySerializer
from .serializers import ProductSerializer
from .serializers import PurchasesSerializer
from .serializers import PurchaseDetailsSerializer
from .serializers import SupportTicketSerializer


class UsersViewSet(viewsets.ModelViewSet):
    queryset = Users.objects.all()
    serializer_class = UsersSerializer

class LoyaltyViewSet(viewsets.ModelViewSet):
    queryset = Loyalty.objects.all()
    serializer_class =  LoyaltySerializer

class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class =  ProductSerializer

class PurchasesViewSet(viewsets.ModelViewSet):
    queryset = Purchases.objects.all()
    serializer_class =  PurchasesSerializer

class PurchaseDetailsViewSet(viewsets.ModelViewSet):
    queryset = PurchaseDetails.objects.all()
    serializer_class =  PurchaseDetailsSerializer

class SupportTicketViewSet(viewsets.ModelViewSet):
    queryset = SupportTicket.objects.all()
    serializer_class =  SupportTicketSerializer