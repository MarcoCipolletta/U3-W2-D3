import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { iJsonresponse } from '../interfaces/i-jsonresponse';
import { BehaviorSubject, map, tap } from 'rxjs';
import { iProduct } from '../interfaces/i-product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  apiUrl: string = 'https://dummyjson.com/products';

  product$ = new BehaviorSubject<iProduct[]>([]);
  cart$ = new BehaviorSubject<iProduct[]>([]);
  preferiti$ = new BehaviorSubject<iProduct[]>([]);

  productsArr: iProduct[] = [];
  cartArr: iProduct[] = [];
  preferitiArr: iProduct[] = [];

  constructor(private http: HttpClient) {
    this.getProdutcs();
  }
  getProdutcs() {
    this.http
      .get<iJsonresponse>(this.apiUrl)
      .pipe(map((response) => response.products))
      .pipe(
        tap((products) => {
          this.product$.next(products);
          this.productsArr = products;
        })
      )
      .subscribe();
  }

  addToCart(product: iProduct) {
    this.cartArr.push(product);
    this.cart$.next(this.cartArr);
  }
  addToPreferiti(product: iProduct) {
    this.preferitiArr.push(product);
    this.cart$.next(this.preferitiArr);
  }
}
