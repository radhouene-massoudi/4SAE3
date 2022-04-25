import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProduitService } from '../productService/produit.service';

@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.css']
})
export class UpdateproductComponent implements OnInit {
id!:any;
liste!:any;
  constructor(private s:ProduitService,private ar:ActivatedRoute,
    private r:Router) { }

  ngOnInit(): void {
    this.id=this.ar.snapshot.params['id']
this.s.getProductById(this.id).subscribe(
  (d)=>{
    this.liste=d;
  }
);
  }
save(f:any){
  this.s.updateProduct(f,this.id).subscribe(
    ()=>{
this.r.navigate(['p2'])
    }
  );
}
}
