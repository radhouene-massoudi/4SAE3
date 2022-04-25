import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-showone-product',
  templateUrl: './showone-product.component.html',
  styleUrls: ['./showone-product.component.css']
})
export class ShowoneProductComponent implements OnInit {
@Input() p!:any;

@Output() notif= new EventEmitter();
@Output() alike=new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  
  }
sendMSG(produit:any){
  this.notif.emit(produit);
}
AddLike(){
  this.alike.emit(this.p);
}
}
