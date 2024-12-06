import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-map-details',
    templateUrl: './map-details.component.html',
    styleUrls: ['./map-details.component.scss'],
    standalone: false
})
export class MapDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  contacts: any[] = [
    {
      icon: 'fas fa-map',
      detail: 'Nouakchott ,Mauritania',
    },
    {
      icon: 'fas fa-envelope',
      detail: ' contact@supnum.mr',
    },
    {
      icon: 'fas fa-phone-alt',
      detail: '(+222) 45 24 45 44',
    },
    {
      icon: 'fas fa-clock',
      detail: 'Lundi au samedi : 08h00 à 20hh00',
    },

  ]
}
