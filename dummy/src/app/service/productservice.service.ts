import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../classes/product';

import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {

  constructor() { }


  public getProducts(): Observable<Product[]> {
    return this.products();
  }

  // public getProduct(id: number): Observable<Product> {
  //   return this
  //     .products()
  //     .pipe(map(_ => {
  //       return _.find((item: Product) => {
  //         return item.id === id;
  //       });
  //     }));
  // }

  private products(): Observable<Product[]> {
    return of(<Product[]>[
      <Product>{id: 1, name: 'Blue item', price: 123.09},
      <Product>{id: 2, name: 'Green and gray', price: 99.09},
      <Product>{id: 3, name: 'Green item', price: 99.09},
      <Product>{id: 4, name: 'Blue and gray', price: 99.09},
      <Product>{id: 5, name: 'Green and blue', price: 99.09},
      <Product>{id: 6, name: 'Green and blue', price: 99.09},
      <Product>{id: 7, name: 'Gray', price: 99.09},
      <Product>{id: 8, name: 'Blue', price: 99.09},
      <Product>{id: 9, name: 'All colors', price: 99.09},
    ]);
  }
}
