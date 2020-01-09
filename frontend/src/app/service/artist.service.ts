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
    return this.http.get( 'api/artist/' + id + '/get');
  }
  deleteArtist(artist) {
    return this.http.delete('/api/artist/' + artist.id + '/delete');
  }
  updateArtist(artist) {
    return this.http.put('/api/artist/' + artist.id + '/update', artist);
  }
  createArtist(artist) {
    return this.http.post('/api/artist/create', artist);
  }
}
