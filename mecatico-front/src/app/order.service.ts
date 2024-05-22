import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class OrderService {
  private apiURL = "http://localhost:8080/api/orders"

  constructor(private http: HttpClient) { }

  createOrder(orderData:any){
    return this.http.post<any>(this.apiURL, orderData)
  }
}
