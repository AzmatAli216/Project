import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() {
    console.log("product service");
   }

getproductdata(){
    return[
        {name:'Mobile',brand:'hp',price:'200000'},
        {name:'laptop',brand:'dell',price:'30000'},
        {name:'tablet',brand:'vivo',price:'9623876'},
    ]
}





}
