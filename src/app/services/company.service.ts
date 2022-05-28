import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Company } from '../models/company.model';
import { Category, Coupon } from '../models/coupon.model';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {


  updateCoupon(couponToUpdate: Coupon) {
    let url = "http://localhost:8080/api/company/update-coupon";
    let token = sessionStorage.getItem("token");
    token = token!=null?token:"";
    let httpHeaders = new HttpHeaders().set("token",token);
    let options = {headers:httpHeaders};
    return this.httpClient.put<Company>(url,couponToUpdate,options);
  }

  

  constructor(private httpClient: HttpClient) { }

  
  public getCompanyDetails(): Observable<Company> {
    let url = "http://localhost:8080/api/company/get-company-details/";
    let token = sessionStorage.getItem("token");
    token = token!=null?token:"";
    let httpHeaders = new HttpHeaders().set("token",token);
    let options = {headers:httpHeaders};
    return this.httpClient.get<Company>(url,options);
 
  }

  public addCoupon(coupon:Coupon){

    let url = "http://localhost:8080/api/company/add-coupon";
    let token = sessionStorage.getItem("token");
    token = token!=null?token:"";
    let httpHeaders = new HttpHeaders().set("token",token);
    let options = {headers:httpHeaders};
    return this.httpClient.post<Coupon>(url,coupon,options);
 
  } 
   deleteCoupon(id: number) {
      let url = "http://localhost:8080/api/company/delete-coupon/"+id;
      let token = sessionStorage.getItem("token");
      token = token!=null?token:"";
      let httpHeaders = new HttpHeaders().set("token",token);
      let options = {headers:httpHeaders};
      return this.httpClient.delete(url,options);
      
    }

    public getCouponsByCategoryHttp(category:Category): Observable<Coupon[]> {
      let token = sessionStorage.getItem("token");
      token = token!=null?token:"";
      let httpHeaders = new HttpHeaders().set("token",token);
      let options = {headers:httpHeaders};
      return this.httpClient.get<Company[]>("http://localhost:8080/api/company/get-company-coupons-category/"+category, options);
   
    }
}
