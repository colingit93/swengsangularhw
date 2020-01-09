import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SongService} from '../service/song.service';
import {GenreService} from '../service/genre.service';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.scss']
})

export class SongListComponent implements OnInit {
  songs: any[];

  constructor(private http: HttpClient, private songService: SongService, public genreService: GenreService) {
  }
  displayedColumns = ['title', 'genre', 'album', 'track_number', 'release_date', 'duration', 'interpret', 'lyric', 'action'];

  ngOnInit() {
    this.songService.getSongs()
      .subscribe((response: any[]) => {
        this.songs = response;
      });
  }
  deleteSong(song: any) {
    this.songService.deleteSong(song)
      .subscribe(() => {
        this.ngOnInit();
      });
  }
}
