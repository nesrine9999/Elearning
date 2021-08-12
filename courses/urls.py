from django.conf.urls import url , include
from django.urls import path
from .views import courses,category,lectures_files,lectures_video,lectures,sections,qcm_questions,qcm_answers
urlpatterns = [

# path('',views.course), 
#Course
path('course/<str:pkc>/resume/<str:pk>' , courses.Course_resume , name="course_resume" ),
url(r'^add-course/$' , courses.create_course , name="course"),
path('update/<str:pk>' , courses.update_course , name="update_course"),

#sections
url(r'^add-course/section/$' , sections.create_section , name="add_section"),
url(r'^add-course/section/update/$' , sections.update_section , name="update_section"),
url(r'^add-course/section/delete/$' , sections.delete_section , name="delete_section"),

#lectures
url(r'^add-course/section/lecture/$' , lectures.create_lecture , name="add_lecture"),
url(r'^add-course/section/lecture/delete/$' , lectures.delete_lecture , name="delete_lectures"),
url(r'^add-course/section/lecture/update/$' , lectures.update_lecture , name="update_lectures"),

#lectures_video
url(r'^add-course/section/lecture/add_video/$' , lectures_video.add_video_lecture , name="add_video_lecture"),
url(r'^add-course/section/lecture/update_video/$' , lectures_video.update_video_lecture , name="update_video_lecture"),

#lectures_video
url(r'^add-course/section/lecture/add_file/$' , lectures_files.add_file_lecture , name="add_file_lecture"),
url(r'^add-course/section/lecture/update_file/$' , lectures_files.update_file_lecture , name="update_file_lecture"),

#qcm_questions
url(r'^add-course/section/lecture/QCM/question/add/$' , qcm_questions.add_question_lecture , name="add_QCM_lecture"),
url(r'add-course/section/lecture/QCM/question/update/$' , qcm_questions.update_question_lecture , name="update_QCM_lecture"),
url(r'add-course/section/lecture/QCM/question/delete/$' , qcm_questions.delete_question_lecture , name="update_QCM_lecture"),

#qcm_answers
url(r'^add-course/section/lecture/QCM/answer/add/$' , qcm_answers.add_answer_lecture , name="add_answer_lecture"),
url(r'^add-course/section/lecture/QCM/answer/update/$' , qcm_answers.update_answer_lecture , name="update_answer_lecture"),
url(r'^add-course/section/lecture/QCM/answer/delete/$' , qcm_answers.delete_answer, name="delete_answer_lecture"),

#category 
path('admin-course-category/',category.category , name ="category"),
url(r'admin-course-category/delete/<str:pk>/$',category.delete_category , name='delete-category')
]