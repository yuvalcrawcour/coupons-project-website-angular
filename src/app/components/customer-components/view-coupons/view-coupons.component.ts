import { Component, OnInit } from '@angular/core';
import { Coupon } from 'src/app/models/coupon.model';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-view-coupons',
  templateUrl: './view-coupons.component.html',
  styleUrls: ['./view-coupons.component.css']
})
export class ViewCouponsComponent implements OnInit {

  constructor(private customerService: CustomerService) { }

  public coupons: Coupon[] = new Array();
  public toShowCoupons:boolean = false;
  ngOnInit(): void {
  }

  public showAllCoupons (){
    this.customerService.getCustomerCouponsHttp().subscribe({next: (array)=>{this.coupons=array},error:(err)=>{alert(err.error.message)}});
    this.toShowCoupons=true;
  }

  public showCouponsByCategory (category:string ){
    this.customerService.getCustomerCouponsByCategoryHttp(category).subscribe({next: (array)=>{this.coupons=array},error:(err)=>{alert(err.error.message)}});
    this.toShowCoupons=true;
  }

  public showCouponsByMaxPrice (maxPriceAsStr:string){
    this.customerService.getCustomerCouponsByMaxPriceHttp(Number.parseFloat(maxPriceAsStr)).subscribe({next: (array)=>{this.coupons=array},error:(err)=>{alert(err.error.message)}});
    this.toShowCoupons=true;
  }

}
