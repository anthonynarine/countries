# from django.conf.urls import url
from . import views
from  django.urls import path

urlpatterns = [
    path("", views.countries_list),
    path("<int:pk>/", views.countries_detail),

]


# using regular expression 

# urlpaterns = [
#     url(r"^api/countries$", views.countries_list),
#     url(r"^api/countries/(?P<pk>[0-9]+)$", views.countries_detail)
# ]