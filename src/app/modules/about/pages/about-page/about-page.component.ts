import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-about-page',
    templateUrl: './about-page.component.html',
    styleUrls: ['./about-page.component.scss'],
    standalone: false
})
export class AboutPageComponent implements OnInit {
  head = 'Connaisnous';
  p = 'Lisez toutes les études de cas sur nos produits !';
  constructor() { }

  ngOnInit(): void {
  }

}
