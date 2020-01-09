from django.db import models
from django.db import models
from django.conf import settings

class Lyric(models.Model):

    lyrictext = models.TextField()

    def __str__(self):
        return self.lyrictext

class Song(models.Model):

    CHOICES = (
        ('a', 'Jazz'),
        ('c', 'Rock')
    )

    title = models.TextField()
    genre = models.CharField(max_length=1, choices=CHOICES, null=True)
    album = models.CharField('Album name', max_length=100, blank=True)
    track_number = models.PositiveSmallIntegerField('Track number', blank=True, null=True)
    release_date = models.DateField()
    duration = models.PositiveIntegerField(help_text='in Minutes')
    lyric = models.ForeignKey(Lyric, on_delete=models.CASCADE, null=True)
    interpret = models.ManyToManyField('Artist', blank=True)

    def __str__(self):
        return self.title


class Artist(models.Model):

    first_name = models.TextField()
    last_name = models.TextField()
    year_of_birth = models.IntegerField()

    def __str__(self):
        return '%s %s (%s)' % (self.first_name, self.last_name, self.year_of_birth)
