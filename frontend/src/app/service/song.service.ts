import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  constructor(private http: HttpClient) {
  }
  getSongs() {
    return this.http.get('/api/song/list');
  }
  getSong(id: string) {
    return this.http.get( 'api/song/' + id + '/get');
  }
  updateSong(song) {
    return this.http.put('/api/song/' + song.id + '/update', song);
  }
  deleteSong(song) {
    return this.http.delete('/api/song/' + song.id + '/delete');
  }
  createSong(song) {
    return this.http.post('/api/song/create', song);
  }
}
