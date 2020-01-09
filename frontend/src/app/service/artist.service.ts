import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  constructor(private http: HttpClient) {
  }
  retrieveArtistOptions() {
    return this.http.get <any[]>('/api/artist/options');
  }

  getArtists() {
    return this.http.get('/api/artist/list');
  }

  getArtist(id: string) {
    return this.http.get( 'api/artist/list' + id + '/get');
  }
}
