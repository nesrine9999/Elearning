from django.shortcuts import render,redirect
from courses.models import  Category 
from courses.forms import AddCourseForm , CreateSectionForm ,CreateLectureForm,CreateCategory
from django.http import JsonResponse
from django.template.loader import render_to_string


def category (request):
    form = CreateCategory()
    categories = Category.objects.all()
   
    if request.method == 'POST':
        print('printing post :',request.POST)
        form = CreateCategory(request.POST)
        if form.is_valid():
            form.save()
            return redirect('category')
        
    else:
        form = CreateCategory()
        # categories = Category.objects.all()
    context =  {
        'form':form,
        'categories' : categories,
        }  
    return render(request, 'category/admin-course-category.html',context)


def delete_category (request,pk):
    category = Category.objects.get(id=pk)
    if request.is_ajax():
        category.delete()
    return JsonResponse({})