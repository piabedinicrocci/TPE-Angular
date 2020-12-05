import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BeerListComponent } from './beer-list/beer-list.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

import { FormsModule } from '@angular/forms';
import { BeerhouseAboutComponent } from './beerhouse-about/beerhouse-about.component';
import { BeerhouseBeersComponent } from './beerhouse-beers/beerhouse-beers.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { InputNumberComponent } from './input-number/input-number.component';

@NgModule({
  declarations: [
    AppComponent,
    BeerListComponent,
    ShoppingCartComponent,
    BeerhouseAboutComponent,
    BeerhouseBeersComponent,
    InputNumberComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
