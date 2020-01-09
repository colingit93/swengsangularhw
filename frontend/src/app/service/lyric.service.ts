import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LyricService {

  constructor(private http: HttpClient) {
  }
  retrieveLyricOptions() {
   return this.http.get <any[]>('/api/lyric/options');
  }
}
