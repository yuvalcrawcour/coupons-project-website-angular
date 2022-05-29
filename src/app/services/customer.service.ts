import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Coupon } from '../models/coupon.model';
import { Customer } from '../models/customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient: HttpClient) { }

  public getCustomerDetails():Observable<Customer>{
    let token = sessionStorage.getItem("token");
    token = token!=null?token:"";
    let httpHeaders = new HttpHeaders().set("token",token);
    let options = {headers:httpHeaders};
    return this.httpClient.get<Customer>("http://localhost:8080/api/customer/get-customer-details", options);
    }



  public getAllCouponsHttp(): Observable<Coupon[]> {
    let token = sessionStorage.getItem("token");
    token = token!=null?token:"";
    let httpHeaders = new HttpHeaders().set("token",token);
    let options = {headers:httpHeaders};
    return this.httpClient.get<Coupon[]>("http://localhost:8080/api/customer/get-all-coupons", options);
 
  }

  public purchaseCoupon(coupon:Coupon){

    let url = "http://localhost:8080/api/customer/purchase-coupon";
    let token = sessionStorage.getItem("token");
    token = token!=null?token:"";
    let httpHeaders = new HttpHeaders().set("token",token);
    let options = {headers:httpHeaders};
    return this.httpClient.post<Coupon>(url,coupon,options);
 
  } 
}
