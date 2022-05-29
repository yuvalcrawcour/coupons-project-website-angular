import { Component, OnInit } from '@angular/core';
import { Category, Coupon } from 'src/app/models/coupon.model';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-view-company-coupons',
  templateUrl: './view-company-coupons.component.html',
  styleUrls: ['./view-company-coupons.component.css']
})
export class ViewCompanyCouponsComponent implements OnInit {
  public toShowCoupons: boolean= false;
  public category?: Category;
  public coupons?:Coupon[];

  constructor(private companyService:CompanyService) { }

  ngOnInit(): void {
  }

  public showByCategory(category:string){
    this.toShowCoupons= true;
    this.category = category as Category;
    this.companyService.getCouponsByCategoryHttp(this.category).subscribe({next: (array)=>{this.coupons=array},error:(err)=>{alert(err.error.message)}});
  }

  public showByMaxPrice(maxPriceAsStr:string){
    this.toShowCoupons= true;
    this.companyService.getCouponsByMaxPriceHttp(Number.parseFloat(maxPriceAsStr)).subscribe({next: (array)=>{this.coupons=array},error:(err)=>{alert(err.error.message)}});
  }

  public showAllCoupons(){
    this.toShowCoupons= true;
    this.companyService.getAllCouponsHttp().subscribe({next: (array)=>{this.coupons=array},error:(err)=>{alert(err.error.message)}});
  }
}
