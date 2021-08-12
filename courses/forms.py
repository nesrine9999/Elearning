from django import forms
from django.db import models
from django.forms import ModelForm
from courses.models import Course , Section , Lecture , Category



class AddCourseForm(forms.ModelForm):
    class Meta:
        model = Course 
        fields = '__all__'

class CreateSectionForm(forms.ModelForm): 
    class Meta:
        model = Section
        fields = '__all__'


class CreateLectureForm(forms.ModelForm):
    class Meta:
        model = Lecture
        fields = '__all__'


class CreateCategory(ModelForm):
    class Meta:
        model= Category
        fields = ['Title', 'slug', 'parent', 'Description','Enabled']