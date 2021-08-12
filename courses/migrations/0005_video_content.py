# Generated by Django 3.2.5 on 2021-08-04 14:33

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('courses', '0004_alter_lecture_content'),
    ]

    operations = [
        migrations.CreateModel(
            name='video_content',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50, null=True)),
                ('video', models.FileField(blank=True, null=True, upload_to='video')),
                ('lecture', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='courses.lecture')),
            ],
        ),
    ]
