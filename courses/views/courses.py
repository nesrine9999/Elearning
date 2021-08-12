from django.shortcuts import render,redirect
from courses.models import Section , Course , Lecture , Category ,video_content,PDF_content,Question,Answers
from courses.forms import AddCourseForm , CreateSectionForm ,CreateLectureForm,CreateCategory
from django.http import JsonResponse
from django.template.loader import render_to_string
from django.shortcuts import get_object_or_404


def create_course(request) :
    form = AddCourseForm(request.POST or None ,request.FILES or None )
    data = {}
    if request.is_ajax() and request.method == "POST" :
        
            
                Title =  request.POST.get('Title')
                cat = request.POST.get('category')
                level = request.POST.get('level')
                Description = request.POST.get('Description')
                couverture = request.FILES['coverture_img']
                category = Category.objects.get(id = cat)
                print(category)
                video =  request.FILES['video']
                
                print(category.Title)  
                course = Course(Title = Title ,  category = category , level = level , Description = Description , image_cover= couverture , video = video  )
                course.save()
        
    context = {'form' : form }
    return render(request , 'courses/add-course.html' , context)

def Course_resume(request,pkc,pk):
    course = Course.objects.get(id = pkc) 
    section = Section.objects.filter(course = course )
    lectures = Lecture.objects.all()
    answers = Answers.objects.all() 
    files = PDF_content.objects.all()
    videos = video_content.objects.all() 

    lect = Lecture.objects.get(id = pk)
    
    context = {'course':course , 'sections' : section , 'lectures' : lectures , 'lect' : lect ,  'files' : files , 'videos' : videos}

    return render(request , 'courses/course-resume.html' , context )


def update_course(request,pk):
    is_instractor = 'False'
    for group in request.user.groups.all():
        print(group)
        print(str(group))
        x = str(group)
        if x == 'instractor':
            is_instractor = 'True'
            print('is_instractor')
    course = Course.objects.get(id = pk)
    form = AddCourseForm(instance=course)
    sections = Section.objects.filter(course = course)
    nb = 0 
    data = {}
    course.approved = False 
    course.draft = False 
    lectures = Lecture.objects.all()
    quest = Question.objects.all()
    answers = Answers.objects.all()
    if request.is_ajax() and request.method == "POST": 
        name = request.POST.get('name')
        cat = request.POST.get('category')
        level = request.POST.get('level') 
        description = request.POST.get('description')
        if request.POST.get('image_ch') == 'image' :
            print(request.POST.get('image_ch')) 
            course.coverture_img.delete()
            course.coverture_img = request.FILES['coverture_img']
            
        if request.POST.get('video_ch') == 'video' :
            print(request.POST.get('video_ch')) 
            course.video.delete()
            course.video = request.FILES['video']
           
        category = Category.objects.get(id = cat)
        course.name = name 
        course.category = category
        category.nb_courses = category.nb_courses + 1 
        category.save() 
        course.level = level 
        course.description = description 
        course.save() 
        message = "your course has updated with success just wait for our admin approved your course to be en ligne" 
        print('course updated')
        if form.is_valid():
            print('heey')
            form.save() 
            data['name'] = form.cleaned_data.get('name') 
            data['status'] = 'ok'
            return JsonResponse(data)
    context = {'f' : form ,'instractor' : is_instractor ,'nb' :nb ,  'course' : course, 'sections' : sections , 'lectures' : lectures ,'questions' : quest , 'answers' : answers}
    return render(request , 'courses/update-course.html' , context)