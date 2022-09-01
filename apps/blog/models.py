from distutils.command.upload import upload
import uuid
from django.db import models

def blog_directory_path(instance, filename):
    return 'blog/{0}/{1}'.format(instance.title, filename)

class Post(models.Model):
    class PostObjects(models.Manager):
        def get_queryset(self):
            return super().get_queryset().filter(status='published')

    options = (
        ('draft', 'Draft'),
        ('published', 'Published'),
    )

    blog_uuid = models.UUIDField(default=uuid.uuid4, unique=True)
    title = models.CharField(max_length=200)
    slug = models.SlugField(unique=True)
    thumbnail = models.ImageField(upload_to = blog_directory_path)
    video = models.FileField(upload_to= blog_directory_path, blank=True, null=True)
    description = models.TextField
    excerpt = models.CharField(max_length=100)
    
    #author = 

    #category =  