from django.db import models
from django.db.models.signals import pre_save
from django.utils import timezone
from E_learning.utils import unique_slug_generator
from django.utils.text import slugify
import uuid
# Create your models here.
class Category(models.Model):
    Parent = (
        ('Course','Course'),
        ('Tutorial','Tutorial'),
        ('Workshop', 'Workshop'),
        ('Company', 'Company'),
        )
    
    Title = models.CharField(null=True, max_length=20)
    slug = models.SlugField(null=True, blank=True)
    parent = models.CharField(max_length=200, null=True , choices=Parent)
    Description = models.TextField(null=True)
    created_at=models.DateTimeField(auto_now_add=True)
    Enabled = models.BooleanField(default=False)
    def __unicode__(self):
        return self.Title

    def __str__(self):
        return self.Title

def slug_generator(sender, instance, *args, **kwargs):
    if not instance.slug:
        instance.slug=unique_slug_generator(instance)

pre_save.connect(slug_generator, sender=Category)

class Course(models.Model):
    LEVEL = (
        ('Intermediate','Intermediate'),
        ('Beginners','Beginners'),
        ('Advance', 'Advance'),
        )
    Title = models.CharField(max_length=20 , null = True)
    category = models.ForeignKey(Category, null = True, on_delete=models.CASCADE)
    level = models.CharField(max_length=200,  choices=LEVEL)
    Description = models.TextField()
    created =  models.DateTimeField(auto_now_add=True)
    image_cover = models.FileField(upload_to='images')
    video = models.FileField(upload_to='video')

    def __unicode__(self):
        return self.Title

    def __str__(self):
        return self.Title

    class Meta :
        ordering = ('-created',)

class Section(models.Model):
    name = models.CharField(max_length=20)
    created =  models.DateTimeField(auto_now_add=True)
    course = models.ForeignKey(Course, null=True ,on_delete=models.CASCADE, default=1)

    def __unicode__(self):
        return self.name

    def __str__(self):
        return self.name

class Lecture(models.Model):
    name = models.CharField(max_length=20)
    created =  models.DateTimeField(auto_now_add=True)
    section = models.ForeignKey(Section, null=True ,on_delete=models.CASCADE, default=1)
    extention = models.CharField(max_length= 20  , null = True )
    def __unicode__(self):
        return self.name

    def delete(self , *args , **kwargs):
        #self.contenu.delete() 
        super().delete(*args , **kwargs)

    def __str__(self):
        return self.name

class video_content(models.Model):

    name = models.CharField(max_length=50 , null = True)
    video = models.FileField(upload_to= 'video' , blank=True , null=True)
    lecture = models.ForeignKey(Lecture , null = True , on_delete=models.CASCADE)

    def __str__(self):
        return self.name 

    def delete(self , *args, **kwargs):
        self.video.delete() 
        super().delete(*args, **kwargs)


class PDF_content(models.Model):
    name = models.CharField(max_length=50 , null = True)
    pdf = models.FileField(upload_to='PDF', blank=True , null=True)
    lecture = models.ForeignKey(Lecture , null = True , on_delete=models.CASCADE)

    def __str__(self):
        return self.name 

    def delete(self , *args, **kwargs):
        self.pdf.delete() 
        super().delete(*args, **kwargs)


class Question(models.Model):
    question = models.CharField(max_length=50 , null = True)
    lecture = models.ForeignKey(Lecture , null = True , on_delete= models.CASCADE)
    def __str__(self):
        return self.question

class Answers(models.Model):
    answer = models.CharField(max_length=50 , null = True)
    is_True = models.BooleanField()
    question = models.ForeignKey(Question , null = True , on_delete=models.CASCADE)
    def __str__(self):
        return self.answer
