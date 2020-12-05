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
      name: 'dust',
      type: 'IPA',
      price: 345,
      stock: 5,
      offer: false,
      quantity: 0,
    },
    {
      image: 'assets/img/honey.jpg',
      name: 'bronze',
      type: 'Honey',
      price: 150,
      stock: 2,
      offer: true,
      quantity: 0,
    },
    {
      image: 'assets/img/negra.jpg',
      name: 'negra',
      type: 'Porter',
      price: 315,
      stock: 0,
      offer: false,
      quantity: 0,
    },
    {
      image: 'assets/img/lager.jpg',
      name: 'walls',
      type: 'Lager',
      price: 170,
      stock: 11,
      offer: true,
      quantity: 0,
    },
    {
      image: 'assets/img/ale.jpg',
      name: 'ooopa',
      type: 'Ale',
      price: 310,
      stock: 8,
      offer: false,
      quantity: 0,
    },
    {
      image: 'assets/img/stout.jpg',
      name: 'negra intensa',
      type: 'Stout',
      price: 340,
      stock: 20,
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
