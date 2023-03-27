from django.db import models

# Create your models here.

class Countries(models.Model):
    name = models.CharField(max_length=50, blank=False, default="")
    capital = models.CharField(max_length=50, blank=False, default="")
    
    def __str__(self):
        return self.name
    
    class Meta:
        ordering = ("id", )
      
    #django automatically adds an auto-increment integer pk column named id
    
    #the subclass above will sort our db records in acending order whe a query is made
    
    
    #DONT FORGET TO REGISTER THIS MODEL IN ADMIN.PY