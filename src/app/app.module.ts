import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { Test2Component } from './test2/test2.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ParamComponent } from './param/param.component';
import { DetailComponent } from './detail/detail.component';

import { ProductsComponent } from './products/products.component';
import { HttpClientModule } from '@angular/common/http';
import { Produits2Component } from './produits2/produits2.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { DeleteproductComponent } from './deleteproduct/deleteproduct.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';
import { FirstComponent } from './first/first.component';
import { AdduserComponent } from './user/adduser/adduser.component';
import { UpdateuserComponent } from './user/updateuser/updateuser.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { TvComponent } from './tv/tv.component';
import { MobileComponent } from './mobile/mobile.component';
import { ShowoneProductComponent } from './showone-product/showone-product.component';
@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    Test2Component,
    LoginComponent,
    NotfoundComponent,
    ParamComponent,
    DetailComponent,
    ProductsComponent,
    Produits2Component,
    AddproductComponent,
    DeleteproductComponent,
    UpdateproductComponent,
    FirstComponent,
    AdduserComponent,
    UpdateuserComponent,
    ChildComponent,
    ParentComponent,
    TvComponent,
    MobileComponent,
    ShowoneProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
