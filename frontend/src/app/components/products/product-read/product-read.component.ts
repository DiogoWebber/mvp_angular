import { ProductService } from './../../product/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product.modelo';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  products: Product[] = []
  displayedColumns = ['id', 'name', 'price']

  constructor(private ProductService: ProductService) { }

  ngOnInit(): void {
    this.ProductService.read().subscribe((products: Product[]) => {
      this.products = products
      console.log(this.products)
    })


  }

}
