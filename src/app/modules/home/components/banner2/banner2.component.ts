import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-banner2',
    templateUrl: './banner2.component.html',
    styleUrls: ['./banner2.component.scss'],
    standalone: false
})
export class Banner2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  bnrs: any[] = [
    {
      head: 'Folles promotions',
      main: 'Achetez-en 1, obtenez-en 1 gratuitement',
      p: 'La meilleure robe classique est en solde à 404',
      btn: 'Lire Plus',
    },
    {
      head: 'printemps/été',
      main: 'saison à venir',
      p: 'La meilleure robe classique est en solde à 404',
      btn: 'Collection',
      cls: 'banner-box2',
    },
  ]
}
