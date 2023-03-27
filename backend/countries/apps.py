from django.apps import AppConfig


class CountriesConfig(AppConfig):
    default_auto_field = "django.db.models.BigAutoField"
    name = "countries"
    
    
    
#Don't forget to register this app in the project settings
