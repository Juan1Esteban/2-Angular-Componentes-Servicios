import { Component, OnInit } from '@angular/core';

import { Product } from '../../models/product.model';

import { StoreService } from '../../services/store.service';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  myShoppingCart : Product[] = [];
  total = 0;

  products: Product[] = [];

  today = new Date();
  date = new Date(2022, 1, 22);


  constructor(
    private store: StoreService,
    private productsService: ProductsService
  ) {
    this.myShoppingCart = this.store.getShoppingCart();
   }

  ngOnInit(): void {
    this.productsService.getAllProducts()
    .subscribe(data => {
      this.products = data;
    });
  }

  onAddToShoppingCart(product: Product) {
    this.store.addProduct(product);
    this.total = this.store.getTotal();
  }

}
