import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
id!:any;
name!:any;
  constructor(private ser:ActivatedRoute) { }

  ngOnInit(): void {
this.id=this.ser.snapshot.params['id'];
//this.name=this.ser.snapshot.params['name'];
console.log(this.id);
//console.log(this.name);
  }
sum(a:any,b:any){
  return a+b;
}

}
