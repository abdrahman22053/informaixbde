import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-contact-page',
    templateUrl: './contact-page.component.html',
    styleUrls: ['./contact-page.component.scss'],
    standalone: false
})
export class ContactPageComponent implements OnInit {
  head = "#contavteznous";
  p = 'LAISSEZ UN MESSAGE. Nous aimons avoir de vos nouvelles !';
  constructor() { }

  ngOnInit(): void {
  }

}
