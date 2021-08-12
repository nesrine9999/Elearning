from django.urls import path
from . import views

urlpatterns = [
     path('Mycourses/',views.MyCourses,name="MyCourses"),
]