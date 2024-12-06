import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-shop-page',
    templateUrl: './shop-page.component.html',
    styleUrls: ['./shop-page.component.scss'],
    standalone: false
})
export class ShopPageComponent implements OnInit {
  head = '#404';
  p = 'Save more with coupons & up to 70% off!';
  constructor() { }

  ngOnInit(): void {
  }

}
