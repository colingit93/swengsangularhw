from django.contrib import admin
from .models import *

class SongAdmin(admin.ModelAdmin):

    list_filter = ('interpret__last_name', )


class ArtistAdmin(admin.ModelAdmin): pass


class LyricAdmin(admin.ModelAdmin): pass


admin.site.register(Song,SongAdmin)
admin.site.register(Artist,ArtistAdmin)
admin.site.register(Lyric,LyricAdmin)

