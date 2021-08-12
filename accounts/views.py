from django.shortcuts import render,redirect 
from django.http import HttpResponse
from django.contrib.auth.forms import UserCreationForm
from .forms import CustomUserForm
from django.contrib.auth import authenticate, login , logout
from django.contrib import messages
from django.contrib.auth.decorators import login_required ,user_passes_test
from E_learning.decorator import allowed_users
from django.conf import settings
from django.contrib.auth.models import Group

# Create your views here.
def sign_in(request):
    #if request.user.is_authenticated:
     #   return redirect('index')
    #else:
        if request.method == 'POST':
            username = request.POST.get('username')
            password = request.POST.get('password')

            user = authenticate(request, username=username, password=password)
            
            if user is not None:
                login(request, user)
                return redirect('index')
                
            else:
                messages.info(request, 'Try again! username or password is incorrect')
        context = {}
        return render(request, "accounts/sign-in.html", context)


def sign_up(request):
   # if request.user.is_authenticated:
    #    return redirect('index')
    #else:
    form = CustomUserForm()
    if request.method == 'POST':
        form = CustomUserForm(request.POST)
        if form.is_valid():
            user = form.save()
            username= form.cleaned_data.get('username')

            group = Group.objects.get(name="Student")
            user.groups.add(group)
            
            messages.success(request, 'Account was successfully created for ' + username )

        return redirect('sign-in')
    context = {'form': form}
    return render(request, "accounts/sign-up.html", context)


def logoutUser(request):
    logout(request)
    return redirect('sign-in')

@login_required(login_url='login')
@allowed_users(allowed_roles=['Student','Instructor'])
def index(request):
    return render(request, "accounts/index.html",{})