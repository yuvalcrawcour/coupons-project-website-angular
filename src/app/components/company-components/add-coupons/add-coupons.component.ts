import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/models/company.model';
import { Category, Coupon } from 'src/app/models/coupon.model';
import { CompanyService } from 'src/app/services/company.service';
import { TokenServiceService } from 'src/app/services/token-service.service';

@Component({
  selector: 'app-add-coupons',
  templateUrl: './add-coupons.component.html',
  styleUrls: ['./add-coupons.component.css']
})
export class AddCouponsComponent implements OnInit {


  public company: Company = new Company();
  public couponToAdd: Coupon = new Coupon();
  public coupons: Coupon[] | undefined = new Array();
  constructor(private companyService: CompanyService, private tokenService: TokenServiceService) { }

  ngOnInit(): void {
    this.companyService.getCompanyDetails().subscribe({ next: (company) => { this.company = company; this.coupons = company.coupons; }, error: (e) => { alert(e.error.message); } });


  }

  public addCoupon() {

    this.couponToAdd.company = this.company;
    this.companyService.addCoupon(this.couponToAdd).subscribe({ next: () => { alert("coupon added") }, error: (e) => { alert(e.error.message); } });
    this.ngOnInit();



  }


}
