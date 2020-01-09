import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SongListComponent} from './song-list/song-list.component';
import {SongFormComponent} from './song-form/song-form.component';
import {ArtistListComponent} from './artist-list/artist-list.component';
import {ArtistFormComponent} from './artist-form/artist-form.component';


// http://localhost:4200/song-form
// http://localhost:4200/song-list
// link (path) reference to the component
// automatically redirect from http://localhost:4200/ to http://localhost:4200/song-list
const routes: Routes = [
  { path: 'song-list', component: SongListComponent },
  { path: 'song-form', component: SongFormComponent },
  { path: 'song-form/:id', component: SongFormComponent},
  { path: 'artist-list', component: ArtistListComponent},
  { path: 'artist-form', component: ArtistFormComponent},
  { path: 'artist-form/:id', component: ArtistFormComponent},
  { path: '', redirectTo: 'song-list', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
