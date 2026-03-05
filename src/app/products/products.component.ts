import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{

  products:any;

  constructor( private api:ApiServiceService)
  {
    api.getProducts("products").subscribe((result:any)=>{
      this.products = result;
    })
  }
  
  ngOnInit(): void {
    
  }


  
}
