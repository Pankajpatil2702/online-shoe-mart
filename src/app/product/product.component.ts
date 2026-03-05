import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{

    productId: any;
    product:any;
    qty:any = 1;
    cartItem:any = {id:"", title:"", price:"", image:"", qty:""};
    cartProducts:any = [];
    constructor(private api:ApiServiceService , private route: ActivatedRoute){}

    ngOnInit(): void  {
      
      this.productId = this.route.snapshot.paramMap.get('productid');
      console.log(this.productId);

      this.api.getById("products", this.productId).subscribe((result:any)=>{
        this.product = result;
        console.log(this.product);

      })
      
      this.cartProducts = JSON.parse(localStorage.getItem("cart") || "[]");
  }
  
  add()
  {
    this.qty = this.qty +1
  }
  remove()
  {
    if(this.qty > 1)
    this.qty = this.qty -1

  }
  addToCart()
  {
    this.cartItem = {id:this.product.id, title:this.product.title, price:this.product.price,image:this.product.image,qty:this.qty};

    
    this.cartProducts.push(this.cartItem);

    console.log(this.cartProducts);

    localStorage.setItem("cartProducts",JSON.stringify(this.cartProducts))
    
  }

}
