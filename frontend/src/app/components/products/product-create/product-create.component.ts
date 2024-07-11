import { Router } from '@angular/router';
import { ProductService } from './../../product/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product.modelo';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  product: Product = {
    name: '',
    price: 0
  }



  constructor(private productService: ProductService,
    private router: Router){ }

  ngOnInit(): void {
  }

  createProduct(): void {
    if (this.product.price === 0) {
      // Exibir uma mensagem ou tomar alguma ação adequada, como impedir a criação do produto
      alert('O preço não pode ser zero.');
      return;
    }
  
    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage('Produto Criado');
      this.router.navigate(['/products']);
    });
  }
  cancel(): void{
    this.router.navigate(['/products'])
  }

}
