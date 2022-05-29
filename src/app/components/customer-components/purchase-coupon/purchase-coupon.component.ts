import { Component, OnInit } from '@angular/core';
import { Coupon } from 'src/app/models/coupon.model';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-purchase-coupon',
  templateUrl: './purchase-coupon.component.html',
  styleUrls: ['./purchase-coupon.component.css']
})
export class PurchaseCouponComponent implements OnInit {

  public coupons: Coupon[]= new Array();
  private couponToPurchase: Coupon= new Coupon();
  constructor(private customerService: CustomerService) { }

  ngOnInit(): void { 
    this.customerService.getAllCouponsHttp().subscribe({ next: (array) => { this.coupons = array }, error: (err) => { alert(err.error.message) } });
  }

  public purchaseCoupon(couponId: number|undefined){
    this.coupons.forEach(coupon => {
      if(coupon.id==couponId){
        this.couponToPurchase=coupon;
      }
    });
    this.customerService.purchaseCoupon(this.couponToPurchase).subscribe({next:()=>{alert("coupon purchased title: "+this.couponToPurchase.title)},error:(err)=>{alert(err.error.message)}});
  }

}
