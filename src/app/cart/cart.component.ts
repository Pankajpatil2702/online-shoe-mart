import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  
  cartProducts:any = [];
  total:number = 0;


  ngOnInit(): void {

    this.cartProducts = JSON.parse(localStorage.getItem("cart") || "[]");

  }

  increaseQty(index:number){

    this.cartProducts[index].qty++;

    this.updateCart();

  }

  decreaseQty(index:number){

    if(this.cartProducts[index].qty > 1){
      this.cartProducts[index].qty--;
    }

    this.updateCart();

  }

  deleteProduct(index:number){

    this.cartProducts.splice(index,1);

    localStorage.setItem("cart",JSON.stringify(this.cartProducts));

    alert("Product removed from cart!");

    this.calculateTotal();
 
  }

  updateCart(){

    localStorage.setItem("cart",JSON.stringify(this.cartProducts));

    this.calculateTotal();

  }

  calculateTotal(){

    this.total = 0;

    this.cartProducts.forEach((item:any)=>{

      this.total += item.price * item.qty;

    });

  }

 
  

}
