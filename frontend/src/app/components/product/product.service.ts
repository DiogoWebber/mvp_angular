import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Product } from '../products/product.modelo';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl= "http://localhost:3001/products"


  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }


  showMessage(msg: string):void {
  this.snackBar.open(msg, 'X', {
    duration: 3000,
    horizontalPosition: "right",
    verticalPosition: "top"
  })
}

create(product: Product): Observable<Product>{
  return this.http.post<Product>(this.baseUrl, product)
}

read(): Observable<Product[]>{
    return this.http.get<Product[]>(this.baseUrl)
}

readById(id: string): Observable<Product>{
  const url = `${this.baseUrl}/${id}`
  return this.http.get<Product>(url)
}
update(product: Product): Observable<Product> {
  // Verificar se o preço é maior que zero antes de enviar
  if (product.price !== null && product.price <= 0) {
    alert('O preço deve ser maior que zero. Produto não será atualizado.');
    // Você pode retornar um Observable com um erro ou null, dependendo do tratamento desejado
    return throwError('O preço deve ser maior que zero.');
  }

  const url = `${this.baseUrl}/${product.id}`;
  return this.http.put<Product>(url, product);
}


delete(id: string): Observable<Product> {
  const url = `${this.baseUrl}/${id}`;
  return this.http.delete<Product>(url);
}

}
