from rest_framework import serializers
from .models import Lyric, Song, Artist


class LyricOptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lyric
        fields = ['id', 'lyrictext']


class SongListSerializer(serializers.ModelSerializer):
    lyric_content = serializers.SerializerMethodField()

    class Meta:
        model = Song
        fields = ['id', 'title', 'genre', 'album', 'track_number', 'release_date', 'duration', 'interpret', 'lyric_content']

    def get_lyric_content(self, obj):
        return obj.lyric.lyrictext if obj.lyric else ''



class SongFormSerializer(serializers.ModelSerializer):

    class Meta:
        model = Song
        fields = '__all__'


# Artist Serializers
class ArtistOptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Artist
        fields = ['id', 'first_name', 'last_name', 'year_of_birth']

class ArtistListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Artist
        fields = ['id', 'first_name', 'last_name', 'year_of_birth']

class ArtistFormSerializer(serializers.ModelSerializer):
    class Meta:
        model = Artist
        fields = '__all__'