import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment.prod";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Product} from "../../models/product/Product";
import {Observable} from "rxjs";
import {AddProduct} from "../../models/product/AddProduct";

const API_URL = environment.baseUrl + 'product/';

const httpOptions = {
  headers: new HttpHeaders({ 'Access-Control-Allow-Origin' : '*', 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(API_URL + 'all');
  }

  addNewProduct(product: AddProduct): Observable<Product> {
    return this.http.post<Product>(API_URL + 'add', product, httpOptions);
  }

  updateProduct(product: Product): Observable<Product> {
    return this.http.put<Product>(API_URL + 'update', product, httpOptions);
  }

  deleteProduct(productId: number): Observable<void> {
    return this.http.delete<void>(API_URL + `delete/${productId}`, httpOptions);
  }

}
