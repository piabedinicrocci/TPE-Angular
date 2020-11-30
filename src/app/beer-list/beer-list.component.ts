import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.css']
})
export class BeerListComponent implements OnInit {

  beer = {
    "image": "assets/img/ipa.jpg",
    "name": "Rubiasa",
    "type": "IPA",
    "stock": 5,
    "price": "$123"
  }
  constructor() { }

  ngOnInit(): void {
  }

}
