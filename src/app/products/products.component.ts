import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
list!:any;
  constructor(private service: ProductService) { }

  ngOnInit(): void {
    this.service.fetchProducts().subscribe(
      (t)=>{
        this.list=t;
        console.log(t);
      }
    );
  }

}
