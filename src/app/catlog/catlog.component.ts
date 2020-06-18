import { Component, OnInit } from '@angular/core';
import { product } from '../shared/product';
import { ProductService } from '../services/product.service';
import { flyInOut, expand } from '../animations/app.animation';

@Component({
  selector: 'app-catlog',
  templateUrl: './catlog.component.html',
  styleUrls: ['./catlog.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
    },
    animations: [
      flyInOut(),
      expand()
    ]
})


export class CatlogComponent implements OnInit {

  
  products : product[];
    
  selectedProduct: product;

  onSelect( product: product){

    this.selectedProduct = product;

  }
  constructor(private productService : ProductService) { }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

}
