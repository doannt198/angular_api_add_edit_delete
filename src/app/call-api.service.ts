import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Product } from 'src/model/product.model';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'Application/json' })
}
const apiUrlget = 'https://tano-api.herokuapp.com/products';
const apiUrlpost = 'https://tano-api.herokuapp.com/products/add';
const apiUrlpostedit = 'https://tano-api.herokuapp.com/products/edit';

@Injectable({
  providedIn: 'root'
})
export class CallApiService {
  private apiUrldelete = 'https://tano-api.herokuapp.com/products/delete';
  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(apiUrlget).pipe(
    )
  }

  add(newProduct: Product): Observable<Product> {
    return this.httpClient.post<Product>(apiUrlpost, newProduct, httpOptions);
  }
  delete(id: number): Observable<Product[]> {
    const url = `${this.apiUrldelete}/${id}`;
    return this.httpClient.delete<Product[]>(url, httpOptions).pipe()
  }
  edit(newProduct: Product): Observable<Product> {
    return this.httpClient.post<Product>(apiUrlpostedit, newProduct, httpOptions).pipe()
  }
}

