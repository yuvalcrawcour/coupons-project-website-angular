import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/models/company.model';
import { Category, Coupon } from 'src/app/models/coupon.model';
import { CompanyService } from 'src/app/services/company.service';
import { TokenServiceService } from 'src/app/services/token-service.service';

@Component({
  selector: 'app-manage-company-coupons',
  templateUrl: './manage-company-coupons.component.html',
  styleUrls: ['./manage-company-coupons.component.css']
})
export class ManageCompanyCouponsComponent implements OnInit {

  public dt?: Date;


  public toShowUpdateForm: boolean = false;
  public company: Company = new Company();
  public couponToAdd: Coupon = new Coupon();
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
  public addCoupon() {

    // let token=sessionStorage.getItem("token"); 
    // if(token!=null){
    //   this.couponToAdd.company=new Company((Number)(this.tokenService.extractClientId(token)));
    //    console.log(this.couponToAdd.company);
    //   }
    this.couponToAdd.company = this.company;
    console.log(this.couponToAdd.company);
    this.companyService.addCoupon(this.couponToAdd).subscribe({ next: () => { alert("coupon added") }, error: (e) => { alert(e.error.message); } });
    this.ngOnInit();



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