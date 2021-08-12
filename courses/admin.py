from django.contrib import admin
from .models import *
# Register your models here.

admin.site.register(Category)
admin.site.register(Course)
admin.site.register(Section)
admin.site.register(Lecture)
admin.site.register(video_content) 
admin.site.register(PDF_content)
admin.site.register(Question) 
admin.site.register(Answers) 