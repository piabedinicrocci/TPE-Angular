import { Component, OnInit } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { Beer } from '../beer-list/Beer';
import { BeerShoppingCartService } from '../beer-shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  shopList$: Observable<Beer[]>;
  constructor(private cart: BeerShoppingCartService){
    this.shopList$ = cart.shopList.asObservable();
  }

  ngOnInit(): void {
  }

}
