import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/models/company.model';
import { Category, Coupon } from 'src/app/models/coupon.model';
import { CompanyService } from 'src/app/services/company.service';
import { TokenServiceService } from 'src/app/services/token-service.service';
@Component({
  selector: 'app-delete-update-coupons',
  templateUrl: './delete-update-coupons.component.html',
  styleUrls: ['./delete-update-coupons.component.css']
})
export class DeleteUpdateCouponsComponent implements OnInit {

  public toShowUpdateForm: boolean = false;
  public company: Company = new Company();
  public couponToUpdate: Coupon = new Coupon();
  public coupons: Coupon[] | undefined = new Array();
  constructor(private companyService: CompanyService, private tokenService: TokenServiceService) { }

  ngOnInit(): void {
    this.companyService.getCompanyDetails().subscribe({ next: (company) => { this.company = company; this.coupons = company.coupons; }, error: (e) => { alert(e.error.message); } });


  }


  public deleteCoupon(id: number | undefined) {
    if (id) {
      this.companyService.deleteCoupon(id).subscribe({ next: (id) => { alert("coupon deleted") }, error: (e) => { alert(e.error.message); } });
      this.ngOnInit();
    }


    // this.companyService.deleteCompany(Number(id)).subscribe({next:(id)=>{alert("company deleted")}, error:(e)=>{alert(e.error.message);}});
  }
  public updateCouponCategory(category: string) {
    this.couponToUpdate.category = category as Category;
    this.updateCoupon();
    this.toShowUpdateForm = false;
  }

  public updateCoupon() {
    console.log(this.couponToUpdate);
    
    this.companyService.updateCoupon(this.couponToUpdate).subscribe({ next: (id) => { alert("coupon updated") }, error: (e) => { alert(e.error.message); } });

   
  }



  public showUpdateForm(id: number | undefined) {
    this.toShowUpdateForm = true;
    if (this.coupons != undefined) {
      for (let i = 0; i < this.coupons.length; i++) {
        let element = this.coupons[i];
        if (element.id == id) {
          this.couponToUpdate = element;
          break;
        }
      }
    }
  }
}