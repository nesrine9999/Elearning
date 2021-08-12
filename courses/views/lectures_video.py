from django.shortcuts import render,redirect
from courses.models import Section , Course , Lecture , Category ,video_content,PDF_content
from courses.forms import AddCourseForm , CreateSectionForm ,CreateLectureForm,CreateCategory
from django.http import JsonResponse
from django.template.loader import render_to_string
from django.shortcuts import get_object_or_404


def add_video_lecture(request):
    if request.is_ajax() and request.method == "POST" :
        lec = request.POST.get('lecture') 
        cour = request.POST.get('course')
        lecture = Lecture.objects.get(name= lec )
        lecture.extention = '.mp4'
        lecture.save() 
        video = request.FILES['video']
        name = request.FILES['video'].name
        cc = video_content(name = name , video = video , lecture = lecture )
        cc.save() 
    return render(request , 'courses/add-course.html')

def update_video_lecture(request):
    if request.is_ajax() and request.method == "POST":
        name = request.POST.get('lecture')
        lecture = Lecture.objects.get(name=name)
        print(lecture.extention)
        if lecture.extention == '.pdf':
            
            vv = PDF_content.objects.get(lecture = lecture)
            vv.pdf.delete()
            vv.delete()
            video = request.FILES['video']
            nameF = request.FILES['video'].name
            vv = video_content(name = nameF , video = video , lecture = lecture)
            vv.save() 
            print('done if ')
        if lecture.extention == '.mp4':
            
            vv = video_content.objects.get(lecture = lecture)
            vv.video.delete()
            vv.video = request.FILES['video']
            vv.name = request.FILES['video'].name
            vv.save() 
            print('done else if') 
        else:
            video = request.FILES['video']
            nameF = request.FILES['video'].name
            vv = video_content(name = nameF , video = video , lecture = lecture)
            vv.save() 
            print('done end else ') 
        lecture.extention = '.mp4'
        lecture.save() 
    return render(request , 'courses/add-course.html')