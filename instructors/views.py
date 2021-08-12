from django.shortcuts import render
from django.contrib.auth.decorators import login_required 
from E_learning.decorator import allowed_users
from courses.models import Course
# Create your views here.

@login_required(login_url='login')
@allowed_users(allowed_roles=['Instructor'])
def MyCourses(request):
    courses = Course.objects.all()
    context =  {
        'courses' : courses,
        }  
    return render(request, "Instructors/instructor-courses.html",context)