import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Company } from 'src/app/models/company.model';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-view-companies',
  templateUrl: './view-companies.component.html',
  styleUrls: ['./view-companies.component.css']
})
export class ViewCompaniesComponent implements OnInit {

  // public product?: Product;
  public companies?: Company[];
  constructor(private activatedRoute:ActivatedRoute,private adminService: AdminService) { 
  }

  ngOnInit(): void {
    let productId = this.activatedRoute.snapshot.params['id'];
    this.adminService.getAllCompaniesHttp().subscribe(
      {
        next:(arr)=>{this.companies=arr;},
        error:(err)=>{alert(err.error.error+": "+err.error.message);},
        complete:()=>{console.log("complete");}
      });

  }

}

