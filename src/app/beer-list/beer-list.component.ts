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
      stock: 5,
      price: 123
    },
    {
      image: 'assets/img/ipa.jpg',
      name: 'Rubia',
      type: 'Honey',
      stock: 2,
      price: 231
    },
    {
      image: 'assets/img/ipa.jpg',
      name: 'Negra',
      type: 'Porter',
      stock: 0,
      price: 312
    },
  ];
  



  constructor() { }

  ngOnInit(): void {
  }

}
