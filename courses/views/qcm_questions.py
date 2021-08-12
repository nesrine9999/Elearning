from courses.models import  Answers, Course, Lecture, Question, Section
from django.shortcuts import redirect, render

def add_question_lecture(request):
    if request.is_ajax() and request.method == "POST" :
        name = request.POST.get('lecture')
        quest = request.POST.get('question')
        lecture = Lecture.objects.get(name = name)
        lecture.extention = '.QCM'
        lecture.save()
        question = Question(question = quest  , lecture = lecture)
        question.save()
        print('done') 
    return render(request ,'courses/add-course.html')

def update_question_lecture(request):
    if request.is_ajax() and request.method== "POST":
        Q1 = request.POST.get('question_old')
        question = Question.objects.get(question = Q1)
        Q2 = request.POST.get('question_new')
        question.question = Q2
        question.save()
    return render (request ,'courses/add-course.html')


def delete_question_lecture(request):
    if request.is_ajax() and request.method == "POST" :
        quest = request.POST.get('question')
        question = Question.objects.get(question = quest)
        question.delete()
    return render(request , 'courses/add-course.html')