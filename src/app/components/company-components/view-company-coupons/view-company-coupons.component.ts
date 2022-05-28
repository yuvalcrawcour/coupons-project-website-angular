import { Component, OnInit } from '@angular/core';
import { Category, Coupon } from 'src/app/models/coupon.model';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-view-company-coupons',
  templateUrl: './view-company-coupons.component.html',
  styleUrls: ['./view-company-coupons.component.css']
})
export class ViewCompanyCouponsComponent implements OnInit {
  public toShowByCategory: boolean= false;
  public category?: Category;
  public couponsByCategory?:Coupon[];

  constructor(private companyService:CompanyService) { }

  ngOnInit(): void {
  }

  public showByCategory(category:string){
    this.toShowByCategory = true;
    this.category = category as Category;
    this.companyService.getCouponsByCategoryHttp(this.category).subscribe({next});
  }
}
