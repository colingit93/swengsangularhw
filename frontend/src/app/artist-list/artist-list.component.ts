import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SongService} from '../service/song.service';
import {ArtistService} from '../service/artist.service';

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.scss']
})
export class ArtistListComponent implements OnInit {
  artists: any[];

  constructor(private http: HttpClient, private artistService: ArtistService) { }
  displayedColumns = ['first_name', 'last_name', 'year_of_birth'];

  ngOnInit() {
    this.http.get('api/artist/list')
      .subscribe((response: any[]) => {
        this.artists = response;
      });
    this.artistService.getArtists()
      .subscribe((response: any[]) => {
        this.artists = response;
      });
  }
  deleteArtist(artist: any) {
    this.http.delete('/api/artist/' + artist.id + '/delete')
      .subscribe(() => {
        this.ngOnInit();
      });
  }
}
