import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gmaps',
  styles: ['agm-map { height: 700px; /* height is required */ }'],
  styleUrls: ['./gmaps.component.scss'],
  template: `<agm-map [latitude]='latitude' [longitude]='longitude' [mapTypeId]='mapType'></agm-map>`
})
export class GmapsComponent implements OnInit {

  latitude = 47.0667;
  longitude = 15.45;
  mapType = 'satellite';

  constructor() { }

  ngOnInit() {
  }

}
