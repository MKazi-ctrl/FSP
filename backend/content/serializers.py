from rest_framework import serializers
from .models import Users
from .models import Loyalty
from .models import Product
from .models import Purchases
from .models import PurchaseDetails
from .models import SupportTicket

class UsersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Users
        fields = '__all__'

class LoyaltySerializer(serializers.ModelSerializer):
    class Meta:
        model = Loyalty
        fields = '__all__'

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model =  Product
        fields = '__all__'

class PurchasesSerializer(serializers.ModelSerializer):
    class Meta:
        model =  Purchases
        fields = '__all__'

class PurchaseDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = PurchaseDetails
        fields = '__all__'

class SupportTicketSerializer(serializers.ModelSerializer):
    class Meta:
        model = SupportTicket
        fields = '__all__'