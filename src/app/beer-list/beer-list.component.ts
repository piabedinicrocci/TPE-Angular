import { Component, OnInit } from '@angular/core';
import { Beer } from './Beer';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.css']
})
export class BeerListComponent implements OnInit {

  beers: Beer[] = [
    {
      image: 'assets/img/ipa.jpg',
      name: 'Rubiasa',
      type: 'IPA',
      price: 123,
      stock: 5,
      offer: false,
    },
    {
      image: 'assets/img/ipa.jpg',
      name: 'Rubia',
      type: 'Honey',
      price: 231,
      stock: 2,
      offer: true,
    },
    {
      image: 'assets/img/ipa.jpg',
      name: 'Negra',
      type: 'Porter',
      price: 312,
      stock: 0,
      offer: false,
    },
  ];
  



  constructor() { }

  ngOnInit(): void {
  }

}
