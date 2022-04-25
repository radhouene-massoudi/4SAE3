import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})
export class MobileComponent implements OnInit {
listeMobile=[
  {
    "title": "mobile",
    "price": "mobile",
    "quantity": "mobile",
    "like": 3,
    "id": 1
  },
  {
    "id": 2,
    "title": "mobile 1",
    "price": "mobile",
    "quantity": "mobile",
    "like": 2
  }
]
  constructor() { }

  ngOnInit(): void {
  }
  decreseLike(p:any){
    let i = this.listeMobile.indexOf(p)
this.listeMobile[i].like++;
  }
}
