import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BeerhouseAboutComponent } from 'src/app/beerhouse-about/beerhouse-about.component';
import { BeerhouseBeersComponent } from 'src/app/beerhouse-beers/beerhouse-beers.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'beers',
    pathMatch: 'full'
  },
  {
    path: 'beers',
    component: BeerhouseBeersComponent
  },
  {
    path: 'about',
    component: BeerhouseAboutComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
