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
    return this.http.get( 'api/song/list' + id + '/get');
  }
  // todoo service for createsong, updatesong, deletesong
}
