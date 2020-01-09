from drf_yasg.utils import swagger_auto_schema
from rest_framework.decorators import api_view
from rest_framework.parsers import JSONParser
from rest_framework.response import Response

from yamod.models import Lyric, Song, Artist
from yamod.serializers import LyricOptionSerializer, SongListSerializer, SongFormSerializer, ArtistListSerializer, ArtistFormSerializer, ArtistOptionSerializer


@swagger_auto_schema(method='GET', responses={200: LyricOptionSerializer(many=True)})
@api_view(['GET'])
def lyric_option_list(request):
    lyric = Lyric.objects.all()
    serializer = LyricOptionSerializer(lyric, many=True)
    return Response(serializer.data)


@swagger_auto_schema(method='GET', responses={200: SongListSerializer(many=True)})
@api_view(['GET'])
def song_list(request):
    lyric = Song.objects.all()
    serializer = SongListSerializer(lyric, many=True)
    return Response(serializer.data)


@swagger_auto_schema(method='POST', request_body=SongFormSerializer, responses={200: SongFormSerializer()})
@api_view(['POST'])
def song_form_create(request):
    data = JSONParser().parse(request)
    serializer = SongFormSerializer(data=data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=201)
    return Response(serializer.errors, status=400)


@swagger_auto_schema(method='PUT', request_body=SongFormSerializer, responses={200: SongFormSerializer()})
@api_view(['PUT'])
def song_form_update(request, pk):
    try:
        song = Song.objects.get(pk=pk)
    except Song.DoesNotExist:
        return Response({'error': 'song does not exist.'}, status=404)

    data = JSONParser().parse(request)
    serializer = SongFormSerializer(song, data=data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=400)


@swagger_auto_schema(method='GET', responses={200: SongFormSerializer()})
@api_view(['GET'])
def song_form_get(request, pk):
    try:
        song = Song.objects.get(pk=pk)
    except Song.DoesNotExist:
        return Response({'error': 'song does not exist.'}, status=404)

    serializer = SongFormSerializer(song)
    return Response(serializer.data)

@api_view(['DELETE'])
def song_delete(request, pk):
    try:
        song = Song.objects.get(pk=pk)
    except Song.DoesNotExist:
        return Response({'error': 'song does not exist.'}, status=404)
    song.delete()
    return Response(status=204)



# ARTIST VIEWS
@swagger_auto_schema(method='GET', responses={200: ArtistOptionSerializer(many=True)})
@api_view(['GET'])
def artist_option_list(request):
    artist = Artist.objects.all()
    serializer = ArtistOptionSerializer(artist, many=True)
    return Response(serializer.data)

@swagger_auto_schema(method='GET', responses={200: ArtistListSerializer(many=True)})
@api_view(['GET'])
def artist_list(request):
    artist = Artist.objects.all()
    serializer = ArtistListSerializer(artist, many=True)
    serializer = ArtistListSerializer(artist, many=True)
    return Response(serializer.data)




@swagger_auto_schema(method='POST', request_body=ArtistFormSerializer, responses={200: ArtistFormSerializer()})
@api_view(['POST'])
def artist_form_create(request):
    data = JSONParser().parse(request)
    serializer = ArtistFormSerializer(data=data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=201)
    return Response(serializer.errors, status=400)


@swagger_auto_schema(method='PUT', request_body=ArtistFormSerializer, responses={200: ArtistFormSerializer()})
@api_view(['PUT'])
def artist_form_update(request, pk):
    try:
        artist = Artist.objects.get(pk=pk)
    except Artist.DoesNotExist:
        return Response({'error': 'Artist does not exist.'}, status=404)

    data = JSONParser().parse(request)
    serializer = ArtistFormSerializer(artist, data=data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=400)


@swagger_auto_schema(method='GET', responses={200: ArtistFormSerializer()})
@api_view(['GET'])
def artist_form_get(request, pk):
    try:
        artist = Artist.objects.get(pk=pk)
    except Artist.DoesNotExist:
        return Response({'error': 'Artist does not exist.'}, status=404)

    serializer = ArtistFormSerializer(artist)
    return Response(serializer.data)


@api_view(['DELETE'])
def artist_delete(request, pk):
    try:
        artist = Artist.objects.get(pk=pk)
    except Artist.DoesNotExist:
        return Response({'error': 'Artist does not exist.'}, status=404)
    artist.delete()
    return Response(status=204)