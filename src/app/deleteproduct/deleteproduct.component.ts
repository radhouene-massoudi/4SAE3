import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProduitService } from '../productService/produit.service';

@Component({
  selector: 'app-deleteproduct',
  templateUrl: './deleteproduct.component.html',
  styleUrls: ['./deleteproduct.component.css']
})
export class DeleteproductComponent implements OnInit {
id!:any;
  constructor(private ar:ActivatedRoute, private S:ProduitService,
    private route:Router) { }

  ngOnInit(): void {
    this.id=this.ar.snapshot.params['id'];
this.S.deleteProduct(this.id).subscribe(
  ()=>{
this.route.navigate(['p2'])
  }
);
  }

}
