from django.db import models

class Users(models.Model):
    UserID = models.AutoField(primary_key=True, default="0")
    FirstName = models.CharField(max_length=200)
    
    def __str__(self):
        return self.FirstName
    
    class Meta:
        db_table = 'Users'
