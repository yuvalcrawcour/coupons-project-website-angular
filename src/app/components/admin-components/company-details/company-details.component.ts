import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Company } from 'src/app/models/company.model';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})
export class CompanyDetailsComponent implements OnInit {

  public company?: Company;
  constructor(private activatedRoute:ActivatedRoute,private adminService: AdminService) { }

  ngOnInit(): void {
    let companyId = this.activatedRoute.snapshot.params['id'];

    let subscription = this.adminService.getCompany(companyId).subscribe({
      next:(comp)=>{this.company=comp;},
      error:(err)=>{alert(err.error.message)},
      complete: ()=>{subscription.unsubscribe}
    });
  }

}
