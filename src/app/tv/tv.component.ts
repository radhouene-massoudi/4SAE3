import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.css']
})
export class TvComponent implements OnInit {
  listeTV=[
    {
      "title": "TV",
      "price": "2000",
      "quantity": 200,
      "like": "0",
      "id": 1
    },
    {
      "id": 2,
      "title": "TV 1",
      "price": "2222",
      "quantity": 3,
      "like": "0"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }
  afterrcvdata(t:any){
//console.log(t);
let i = this.listeTV.indexOf(t);
this.listeTV[i].quantity--;
  }
}
