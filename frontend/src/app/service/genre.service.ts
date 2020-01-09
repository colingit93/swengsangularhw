import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GenreService {
  genreNames = {a: 'Jazz', c: 'Rock'};
  constructor() { }
}
