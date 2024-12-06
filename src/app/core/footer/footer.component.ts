import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
    standalone: false
})
export class FooterComponent  {

  constructor() { }

  // Details
  details: any[] = [
    {
      head: 'Address: ',
      date: ' NOUAKCHOTT,MAURITANIA',
    },
    {
      head: 'Phone: ',
      date: ' (+222) 45 24 45 44',
    }
  ]

  // Icons
  icons: any[] = [
    {
      cls: 'fab fa-facebook-f',
    },
    {
      cls: 'fab fa-twitter',
    },
    {
      cls: 'fab fa-instagram',
    },
    {
      cls: 'fab fa-pinterest-p',
    },
    {
      cls: 'fab fa-youtube',
    },
  ]
}
