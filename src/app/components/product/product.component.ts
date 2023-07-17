import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  product = {
    name: 'Product 1',
    price: '11',
    image: './assets/images/toy.jpg'
  }

}
