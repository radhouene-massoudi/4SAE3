import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductComponent } from './addproduct/addproduct.component';
import { DeleteproductComponent } from './deleteproduct/deleteproduct.component';
import { DetailComponent } from './detail/detail.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProductsComponent } from './products/products.component';
import { Produits2Component } from './produits2/produits2.component';
import { TestComponent } from './test/test.component';
import { Test2Component } from './test2/test2.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'p2', component:Produits2Component},
  {path:'p', component:ProductsComponent},
  {path:'addproduct', component:AddproductComponent},
  {path:'test', component:TestComponent},
  {path:'del/:id', component:DeleteproductComponent},
  {path:'update/:id', component:UpdateproductComponent},
  {path:'test2', component:Test2Component},
  {path:'detailP/:id', component:DetailComponent},
  {path:'**', component:NotfoundComponent},
  
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
