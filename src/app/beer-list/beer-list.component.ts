import { Component, OnInit } from '@angular/core';
import { BeerShoppingCartService } from '../beer-shopping-cart.service';
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
      price: 345,
      stock: 5,
      offer: false,
      quantity: 0,
    },
    {
      image: 'assets/img/ipa.jpg',
      name: 'Rubia',
      type: 'Honey',
      price: 123,
      stock: 2,
      offer: true,
      quantity: 0,
    },
    {
      image: 'assets/img/ipa.jpg',
      name: 'Negra',
      type: 'Porter',
      price: 312,
      stock: 0,
      offer: false,
      quantity: 0,
    },
  ];
  
  constructor(private cart: BeerShoppingCartService){
  }

  ngOnInit(): void {
  }

  addToCart(beer): void{
    this.cart.addToCart(beer);
    beer.stock -= beer.quantity;
    beer.quantity = 0;
  }

  maxReached(m: string){
    alert(m);
  }
}
