import { Component, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-blog',
    templateUrl: './blog.component.html',
    styleUrls: ['./blog.component.scss'],
    standalone: false
})
export class BlogComponent implements OnInit {
  head = '#lirePlus';
  p = 'Lisez toutes les études de cas sur nos produits !';

  constructor() { }

  ngOnInit(): void {
  }

}
