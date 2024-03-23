import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { bestSellerItem } from '../models/common.models';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private readonly http: HttpClient) {}
  getBestSelling(): Observable<bestSellerItem[]> {
    return this.http.get<bestSellerItem[]>(
      'https://fakestoreapi.com/products?limit=10'
    );
  }
}
