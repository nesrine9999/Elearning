from courses.models import  Answers, Course, Lecture, Question, Section
from django.shortcuts import redirect, render

def add_answer_lecture(request):
    if request.is_ajax() and request.method == "POST":
        q = request.POST.get('question')
        question = Question.objects.get(question = q)
        answer = request.POST.get('answer')
        ch = request.POST.get('ch') 
        if ch == 'True':
            ok = True
        else:
            ok = False
        ans = Answers(answer = answer , is_True = ok , question = question)
        ans.save()
    return render(request , 'courses/add-course.html')

def update_answer_lecture(request):
    if request.is_ajax() and request.method == "POST":
        rep = request.POST.get('answer_old')
        Ans = Answers.objects.get(answer = rep) 
        new_rep = request.POST.get('answer_new')
        Ans.answer = new_rep 
        ch = request.POST.get('ch')
        if ch == 'True':
            ok = True
        else:
            ok = False
        Ans.is_True = ok
        Ans.save()
    return render(request , 'courses/add-course.html') 

def delete_answer (request):
    if request.is_ajax() and request.method == "POST":
        ans = request.POST.get('answer')
        answer = Answers.objects.get(answer = ans)
        answer.delete()
    return render(request , 'courses/add-course.html')