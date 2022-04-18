import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
c="red";
klass='4SAE3';
listProdcut=[
  {id: 1, title: "T-shirt 1", price: 18, quantity: 0, like: 0},
  {id: 2, title: "T-shirt 2", price: 21, quantity: 10, like: 0},
  {id: 3, title: "T-shirt 3", price: 16, quantity: 8, like: 0}, ];
  constructor(private s:TestService) { }

  ngOnInit(): void {
    this.s.msg();
  }
showMsg(){
  alert('hdgfhgfsdhs');
}
changeColor(){
  this.c='green'
}

}
