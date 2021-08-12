from django.shortcuts import render,redirect
from courses.models import Section , Course , Lecture , Category ,video_content,PDF_content
from courses.forms import AddCourseForm , CreateSectionForm ,CreateLectureForm,CreateCategory
from django.http import JsonResponse
from django.template.loader import render_to_string
from django.shortcuts import get_object_or_404

def add_file_lecture(request):
    if request.is_ajax() and request.method == "POST" :
        lec = request.POST.get('lecture') 
        lecture = Lecture.objects.get(name= lec )
        lecture.extention = '.pdf'
        lecture.save() 
        pdf = request.FILES['file']
        name = request.FILES['file'].name
        cc = PDF_content(name = name , pdf = pdf , lecture = lecture )
        cc.save() 
    return render(request , 'courses/add-course.html')

def update_file_lecture(request):
    if request.is_ajax() and request.method == "POST" :
        name = request.POST.get('lecture')
        lecture = Lecture.objects.get(name=name)
        print(lecture.extention)
        if lecture.extention == '.mp4':
           
            vv = video_content.objects.get(lecture = lecture)
            vv.video.delete()
            vv.delete()
            pdf = request.FILES['file']
            nameF = request.FILES['file'].name
            vv = PDF_content(name = nameF , pdf = pdf , lecture = lecture)
            vv.save() 
        elif lecture.extention == '.pdf':
            
            vv = PDF_content.objects.get(lecture = lecture)
            vv.pdf.delete()
            vv.video = request.FILES['file']
            vv.name = request.FILES['file'].name
            vv.save() 
        lecture.extention = '.pdf'
        lecture.save() 
    return render(request ,'courses/add-course.html') 