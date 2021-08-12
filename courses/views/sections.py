from django.shortcuts import render,redirect
from courses.models import Section , Course , Lecture , Category ,video_content,PDF_content
from courses.forms import AddCourseForm , CreateSectionForm ,CreateLectureForm,CreateCategory
from django.http import JsonResponse
from django.template.loader import render_to_string
from django.shortcuts import get_object_or_404



def create_section(request):
    if request.is_ajax() and request.method == "POST":
        c = request.POST.get('course')
        course = Course.objects.get(Title = c) 
        sec = request.POST.get('section')
        section = Section(name = sec , course = course )
        section.save() 

    return render(request , 'courses/add-course.html') 

def update_section(request):
    if request.is_ajax() and request.method == "POST":
        name_old = request.POST.get('section_old')
        print(name_old)
        name = request.POST.get('section_new')
        print(name)
        course = request.POST.get('course')
        Cour = Course.objects.get(Title = course)
        print(Cour)
        section = Section.objects.get(name = name_old)
        section.name = name
        section.save()
    return render(request , 'courses/add-course.html')

def delete_section(request):
    if request.is_ajax() and request.method == "POST":
        sec = request.POST.get('section')
        print(sec)
        section = Section.objects.get(name = sec )
        section.delete()
    return render(request , 'courses/add-course.html')