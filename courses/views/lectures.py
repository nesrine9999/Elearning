from django.shortcuts import render,redirect
from courses.models import Section , Course , Lecture , Category ,video_content,PDF_content
from courses.forms import AddCourseForm , CreateSectionForm ,CreateLectureForm,CreateCategory
from django.http import JsonResponse
from django.template.loader import render_to_string
from django.shortcuts import get_object_or_404


def create_lecture(request):
    if request.is_ajax() and request.method == "POST" : 
        noms = request.POST.get('section')
        name  = request.POST.get('lecture') 
        print(name)
        section = Section.objects.get(name  = noms)
        lecture = Lecture(name  = name ,  section = section)
        lecture.save()
        
    return render(request , 'courses/add-course.html') 

def update_lecture(request):
    if request.is_ajax() and request.method == "POST":
        lecture_old = request.POST.get('lecture_old')
        print(lecture_old)
        lecture_new = request.POST.get('lecture_new')
        print(lecture_new)
        course = Course.objects.get(Title = request.POST.get('course'))
        lectures = Lecture.objects.filter(name=lecture_old)
        for lecture in lectures:
            if lecture.section.course == course:
                lecture.name = lecture_new 
                print(course)
                lecture.save()
        return render(request , 'courses/add-course.html')

def delete_lecture(request):
    if request.is_ajax() and request.method == "POST":
        lec = request.POST.get('lecture')
        print(lec)
        lecture = Lecture.objects.get(name = lec)
        print(lecture)
        lecture.delete()
    return render(request , 'courses/add-course.html')