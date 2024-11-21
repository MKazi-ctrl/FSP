from django.db import models

class Users(models.Model):
    UserID = models.AutoField(primary_key=True, default="0")
    FirstName = models.CharField(max_length=200)
    Lastname = models.CharField(max_length=200)
    Email = models.CharField(max_length=200)
    PhoneNumber = models.CharField(max_length=200)
    Address = models.CharField(max_length=200)
    City = models.CharField(max_length=200)
    PostalCode = models.CharField(max_length=200)
    Country = models.CharField(max_length=200)
    
    def __str__(self):
        return self.FirstName
    
    class Meta:
        db_table = 'Users'

class Loyalty(models.Model):
    transactionID = models.AutoField(primary_key=True)  # Use custom primary key 'transactionID'
    UserID = models.ForeignKey('Users', on_delete=models.CASCADE) # Explicitly specify the related field
    points = models.IntegerField()
    transactionType = models.CharField(max_length=10, choices=[('earn', 'earn'), ('redeem', 'redeem')])
    date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return str(self.points)

    class Meta:
        db_table = 'LoyaltyTransactions'

class Product(models.Model):
    productID = models.AutoField(primary_key=True)  # Auto-increment primary key
    productName = models.CharField(max_length=255, unique=True)  # Unique product name
    description = models.TextField(null=True, blank=True)  # Text field for description
    price = models.DecimalField(max_digits=10, decimal_places=2)  # Decimal field for price
    exclusive = models.BooleanField()  # Boolean field for exclusive (0 or 1)
    createdAt = models.DateTimeField(auto_now_add=True)  # Timestamp for creation, auto set
    # Explicitly define the constraint for 'exclusive' field values (0 or 1)
    class Meta:
        db_table = 'Products'

    def __str__(self):
        return self.productName
    
class Purchases(models.Model):
    purchaseID = models.AutoField(primary_key=True)  # Auto-increment field
    UserID = models.ForeignKey('Users', on_delete=models.CASCADE)  # Foreign key to Users model
    purchaseDate = models.DateTimeField(auto_now_add=True)  # Auto-set the timestamp to current date/time

    def __str__(self):
        return f"Purchase {self.purchaseID} by {self.userID}"

    class Meta:
        db_table = 'Purchases'  # Define the table name in the database

class PurchaseDetails(models.Model):
    purchaseDetailID = models.AutoField(primary_key=True)  # Auto-increment field for purchase details ID
    purchaseID = models.ForeignKey('Users', on_delete=models.CASCADE)  # ForeignKey to Purchases model
    productID = models.ForeignKey(Product, null=True, on_delete=models.SET_NULL)  # ForeignKey to Product model, with null allowed
    pointsEarned = models.IntegerField(default=0)  # Points earned, default value is 0

    def __str__(self):
        return f"PurchaseDetail {self.purchaseDetailID} for Purchase {self.purchaseID}"

    class Meta:
        db_table = 'PurchaseDetails'  # Define the table name in the database

class SupportTicket(models.Model):
    STATUS_CHOICES = [
        ('Open', 'Open'),
        ('In_progress', 'In Progress'),
        ('Resolved', 'Resolved'),
        ('Pending', 'Pending'),
    ]
    
    PRIORITY_CHOICES = [
        ('Low', 'Low'),
        ('Medium', 'Medium'),
        ('High', 'High'),
    ]

    ticketID = models.AutoField(primary_key=True)
    userID = models.ForeignKey('Users', on_delete=models.CASCADE)  # Assuming a User model exists
    subject = models.CharField(max_length=100)
    description = models.TextField()
    category = models.CharField(max_length=100, blank=True, null=True)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='Open')
    priority = models.CharField(max_length=20, choices=PRIORITY_CHOICES)
    createdAt = models.DateTimeField(auto_now_add=True)
    updatedAt = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.subject} - {self.status}"
    class Meta:
        db_table = 'SupportTickets'  # Define the table name in the database
