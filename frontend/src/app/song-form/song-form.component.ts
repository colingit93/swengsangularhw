import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormBuilder, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {GenreService} from '../service/genre.service';
import {LyricService} from '../service/lyric.service';
import {ArtistService} from '../service/artist.service';

@Component({
  selector: 'app-song-form',
  templateUrl: './song-form.component.html',
  styleUrls: ['./song-form.component.scss']
})
export class SongFormComponent implements OnInit {

  songFormGroup;
  lyricOptions;
  artistOptions;

  constructor(private fb: FormBuilder, private http: HttpClient, private route: ActivatedRoute, private router: Router, public genreService: GenreService, private lyricService: LyricService, private artistService: ArtistService) {
  }

  ngOnInit() {
    this.songFormGroup = this.fb.group({
      'id': [null],
      'title': ['', Validators.required],
      'genre': [null],
      'album': [''],
      'track_number': [1],
      'release_date': ['1900-01-01'],
      'duration': [2],
      'lyric': [null],
      'interpret': [[]],
    });

    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.http.get('/api/song/' + id + '/get')
        .subscribe((response) => {
          this.songFormGroup.patchValue(response);
        });
    }
    this.lyricService.retrieveLyricOptions().subscribe((results) => {
      this.lyricOptions = results;
    });
    this.artistService.retrieveArtistOptions().subscribe((results) => {
      this.artistOptions = results;
    });
  }
  createSong() {
    const song = this.songFormGroup.value;
    if (song.id) {
      this.http.put('/api/song/' + song.id + '/update', song)
        .subscribe(() => {
          alert('updated successfully');
        });
    } else {
      this.http.post('/api/song/create', this.songFormGroup.value)
        .subscribe(() => {
          alert('created successfully');
        });
    }
  }

}
