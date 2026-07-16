import { Component, signal } from '@angular/core';
import { NgModel } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

import { NgFor } from '@angular/common';
import { User } from './user/user';
import { ProductService } from './services/product';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, User],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('demooapp');

productData:{
    name: string;
    brand: string;
    price: string;
}[] |undefined;
constructor(private productService:ProductService){

}

getproductdata(){
  this.productData=this.productService.getproductdata()
  console.log(this.productData);

}






  }


