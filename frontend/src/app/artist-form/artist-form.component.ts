import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-artist-form',
  templateUrl: './artist-form.component.html',
  styleUrls: ['./artist-form.component.scss']
})
export class ArtistFormComponent implements OnInit {
  artistFormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.artistFormGroup = this.fb.group({
      'id': [null],
      'first_name': [''],
      'last_name': [''],
      'year_of_birth': ['']
    });

    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.http.get('/api/artist/' + id + '/get')
        .subscribe((response) => {
          this.artistFormGroup.patchValue(response);
        });
    }
  }

  createArtist() {
    const artist = this.artistFormGroup.value;
    if (artist.id) {
      this.http.put('/api/artist/' + artist.id + '/update', artist)
        .subscribe( () => {
          alert('updated successfully');
        });
    } else {
      this.http.post('/api/artist/create', this.artistFormGroup.value)
        .subscribe(() => {
          alert('created successfully');
        });
    }
  }

}
