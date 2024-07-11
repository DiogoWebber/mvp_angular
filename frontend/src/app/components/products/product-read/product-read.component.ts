import { Component, OnInit } from '@angular/core';
import { Product } from './../product.modelo';
import { ProductService } from '../../product/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  products: Product[] = []; // Definindo a propriedade products como uma lista de Product
  displayedColumns = ['id', 'name', 'price', 'action'];

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.productService.read().subscribe(products => {
      this.products = products;
    });
  }

  deleteProduct(id: number): void { // Agora aceita id como number
    this.productService.delete(id.toString()).subscribe(() => {
      this.productService.showMessage('Produto Deletado');
      this.products = this.products.filter(product => product.id !== id);
    });
  }
}
