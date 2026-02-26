import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  products = [
    {
      id: 1,
      name: 'Running Shoes',
      price: 2999,
      image: 'assets/images/first.jpg'
    },
    {
      id: 2,
      name: 'Casual Sneakers',
      price: 3499,
      image: '../assets/images/second.jpg'
    },
    {
      id: 3,
      name: 'Formal Shoes',
      price: 4199,
      image: 'assets/images/third.jpg'
    }
  ];

  addToCart(product: any) {
    alert(product.name + ' added to cart!');
  }

  buyNow(product: any) {
    alert('Buying ' + product.name);
  }

}
