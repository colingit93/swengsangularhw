from django.conf.urls import url
from django.urls import path
from drf_yasg import openapi
from drf_yasg.views import get_schema_view

from django.contrib import admin
from . import views

schema_view = get_schema_view(
    openapi.Info(
        title='API',
        default_version='v1'
    ),
)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('lyric/options', views.lyric_option_list),
    path('artist/options', views.artist_option_list),
    path('song/list', views.song_list),
    path('song/create', views.song_form_create),
    path('song/<int:pk>/get', views.song_form_get),
    path('song/<int:pk>/update', views.song_form_update),
    path('song/<int:pk>/delete', views.song_delete),
    path('artist/list', views.artist_list),
    path('artist/create', views.artist_form_create),
    path('artist/<int:pk>/get', views.artist_form_get),
    path('artist/<int:pk>/update', views.artist_form_update),
    path('artist/<int:pk>/delete', views.artist_delete),

    url(r'^swagger(?P<format>\.json|\.yaml)$', schema_view.without_ui(cache_timeout=0), name='schema-json'),
    url(r'^swagger/$', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    url(r'^redoc/$', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),
]
