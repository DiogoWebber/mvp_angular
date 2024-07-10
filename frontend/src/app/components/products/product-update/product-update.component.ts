import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './../../product/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product.modelo';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  constructor(private ProductService: ProductService, private router: Router, private route: ActivatedRoute) { }

  product: Product= {
    name: '',
    price: 0
  }
  
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');if (id !== null)
    this.ProductService.readById(id).subscribe(product =>{
      this.product = product
    })
  }

  updateProduct(): void{
    this.ProductService.update(this.product).subscribe(() => {
      this.ProductService.showMessage('Produto Alterado')
      this.router.navigate(['/products'])

    })
  }
  cancel(): void{
    this.router.navigate(['/products'])
  }


  
}
