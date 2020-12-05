import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Beer } from './beer-list/Beer';

@Injectable({
  providedIn: 'root'
})
export class BeerShoppingCartService {

  private _shopList: Beer[] = [];

  shopList: BehaviorSubject<Beer[]> = new BehaviorSubject([]);

  constructor() { }

  addToCart(beer: Beer) {
    let item: Beer = this._shopList.find((v1) => v1.name == beer.name);
    if (!item){
      this._shopList.push({ ... beer});
    } else {
        item.quantity += beer.quantity;
    }
    console.log(this._shopList);
    this.shopList.next(this._shopList);
  }

}
