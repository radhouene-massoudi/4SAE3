import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProduitService } from '../productService/produit.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  constructor(private s:ProduitService, private router:Router) { }

  ngOnInit(): void {
  }
  save(t:any){
this.s.addProduct(t).subscribe(
  ()=>{
   // alert('good')
   this.router.navigate(['p2'])
  }
);
  }
}
