import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../productService/produit.service';

@Component({
  selector: 'app-produits2',
  templateUrl: './produits2.component.html',
  styleUrls: ['./produits2.component.css']
})
export class Produits2Component implements OnInit {
list!:any;
  constructor(private p:ProduitService) { }

  ngOnInit(): void {
    this.p.getProducts().subscribe(
      (d)=>{
this.list=d;
      }
    );
  }

}
