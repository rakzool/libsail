import { Injectable } from '@angular/core';
import { product } from '../shared/product';
import { PRODUCTS } from '../shared/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts() : product[] {
    return PRODUCTS;
  }
  getProduct(id: string): product {
      return PRODUCTS.filter((product) =>(product.id === id))[0];
  }
}
