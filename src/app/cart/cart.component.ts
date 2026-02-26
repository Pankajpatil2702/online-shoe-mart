import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  cartItems = [
    {
      id: 1,
      name: 'Running Shoes',
      price: 2999,
      quantity: 1,
      image: 'assets/images/productsFirst.jpg'
    },
    {
      id: 2,
      name: 'Casual Sneakers',
      price: 3499,
      quantity: 1,
      image: 'assets/images/productsSecond.jpg'
    }
  ];

  increaseQty(item: any) {
    item.quantity++;
  }

  decreaseQty(item: any) {
    if (item.quantity > 1) {
      item.quantity--;
    }
  }

  removeItem(item: any) {
    this.cartItems = this.cartItems.filter(p => p.id !== item.id);
  }

  getTotal() {
    return this.cartItems.reduce((total, item) =>
      total + (item.price * item.quantity), 0);
  }

}
