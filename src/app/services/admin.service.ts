import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { Company } from '../models/company.model';
import { Customer } from '../models/customer.model';


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  public getCustomer(customerId:number): Observable<Customer> {
    let url = "http://localhost:8080/api/admin/get-one-customer/"+customerId;
    let token = sessionStorage.getItem("token");
    token = token!=null?token:"";
    let httpHeaders = new HttpHeaders().set("token",token);
    let options = {headers:httpHeaders};
    return this.HttpClient.get<Customer>(url,options);
 
  }
public updateCustomer(customer:Customer){

    let url = "http://localhost:8080/api/admin/update-customer";
    let token = sessionStorage.getItem("token");
    token = token!=null?token:"";
    let httpHeaders = new HttpHeaders().set("token",token);
    let options = {headers:httpHeaders};
    return this.HttpClient.put<Company>(url,customer,options);
 
  }

  deleteCustomer(id: number) {
    let url = "http://localhost:8080/api/admin/delete-customer/"+id;
    let token = sessionStorage.getItem("token");
    token = token!=null?token:"";
    let httpHeaders = new HttpHeaders().set("token",token);
    let options = {headers:httpHeaders};
    return this.HttpClient.delete(url,options);
    
  }
  public addCustomer(customer:Customer){

    let url = "http://localhost:8080/api/admin/add-customer";
    let token = sessionStorage.getItem("token");
    token = token!=null?token:"";
    let httpHeaders = new HttpHeaders().set("token",token);
    let options = {headers:httpHeaders};
    return this.HttpClient.post<Customer>(url,customer,options);
 
  }

  public getAllCustomersHttp(): Observable<Customer[]> {
    let token = sessionStorage.getItem("token");
    token = token!=null?token:"";
    let httpHeaders = new HttpHeaders().set("token",token);
    let options = {headers:httpHeaders};
    return this.HttpClient.get<Company[]>("http://localhost:8080/api/admin/get-all-customers", options);
 
  }
  public updateCompany(company:Company){

    let url = "http://localhost:8080/api/admin/update-company";
    let token = sessionStorage.getItem("token");
    token = token!=null?token:"";
    let httpHeaders = new HttpHeaders().set("token",token);
    let options = {headers:httpHeaders};
    return this.HttpClient.put<Company>(url,company,options);
 
  }

  deleteCompany(id: number) {
    let url = "http://localhost:8080/api/admin/delete-company/"+id;
    let token = sessionStorage.getItem("token");
    token = token!=null?token:"";
    let httpHeaders = new HttpHeaders().set("token",token);
    let options = {headers:httpHeaders};
    return this.HttpClient.delete(url,options);
    
  }
  

  
  constructor(private HttpClient: HttpClient) { }

  public addCompany(company:Company){

    let url = "http://localhost:8080/api/admin/add-company";
    let token = sessionStorage.getItem("token");
    token = token!=null?token:"";
    let httpHeaders = new HttpHeaders().set("token",token);
    let options = {headers:httpHeaders};
    return this.HttpClient.post<Company>(url,company,options);
 
  }


  public getAllCompaniesHttp(): Observable<Company[]> {
    let token = sessionStorage.getItem("token");
    token = token!=null?token:"";
    let httpHeaders = new HttpHeaders().set("token",token);
    let options = {headers:httpHeaders};
    return this.HttpClient.get<Company[]>("http://localhost:8080/api/admin/get-all-companies", options);
 
  }

  public getCompany(companyId:number): Observable<Company> {
    let url = "http://localhost:8080/api/admin/get-one-company/"+companyId;
    let token = sessionStorage.getItem("token");
    token = token!=null?token:"";
    let httpHeaders = new HttpHeaders().set("token",token);
    let options = {headers:httpHeaders};
    return this.HttpClient.get<Company>(url,options);
 
  }


}
