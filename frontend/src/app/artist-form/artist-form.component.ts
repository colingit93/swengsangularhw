import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {ArtistService} from '../service/artist.service';

@Component({
  selector: 'app-artist-form',
  templateUrl: './artist-form.component.html',
  styleUrls: ['./artist-form.component.scss']
})
export class ArtistFormComponent implements OnInit {
  artistFormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient, private route: ActivatedRoute, private router: Router, private artistService: ArtistService) { }

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
      this.artistService.updateArtist(artist)
        .subscribe( () => {
          alert('updated successfully');
        });
    } else {
      this.artistService.createArtist(artist)
        .subscribe(() => {
          alert('created successfully');
        });
    }
  }

}
