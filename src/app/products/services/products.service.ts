import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, catchError, of } from 'rxjs';
import { Product, ProductResponse } from '../../interfaces/product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private baseUrl: string = 'https://evergreen-dis.herokuapp.com/api';

  constructor(private http: HttpClient) {}

  create(product: Product) {
    const url = `${this.baseUrl}/product/save`;
    const body = product;

    return this.http.post<ProductResponse>(url, body);
  }

  list() {
    const url = `${this.baseUrl}/product/list`;
    return this.http
      .get<ProductResponse>(url)
      .pipe(map((resp) => resp.products));
  }

  show(id: string) {
    const url = `${this.baseUrl}/product/show/${id}`;
    return this.http.get<ProductResponse>(url).pipe(
      map((resp) => resp),
      catchError((err) => of(err))
    );
  }

  update(product: Product, id: string) {
    const url = `${this.baseUrl}/product/update/${id}`;
    const body = product;

    return this.http.put<ProductResponse>(url, body);
  }

  delete(id: string) {
    const url = `${this.baseUrl}/product/delete/${id}`;

    return this.http.delete<ProductResponse>(url);
  }
}
