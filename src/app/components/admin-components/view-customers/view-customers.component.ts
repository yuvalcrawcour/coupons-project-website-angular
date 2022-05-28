import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Customer } from 'src/app/models/customer.model';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-view-customers',
  templateUrl: './view-customers.component.html',
  styleUrls: ['./view-customers.component.css']
})
export class ViewCustomersComponent implements OnInit {

  public customers?: Customer[];
  constructor(private activatedRoute:ActivatedRoute,private adminService: AdminService) { 
  }

  ngOnInit(): void {
    let productId = this.activatedRoute.snapshot.params['id'];
    this.adminService.getAllCustomersHttp().subscribe(
      {
        next:(arr)=>{this.customers=arr;},
        error:(err)=>{alert(err.error.error+": "+err.error.message);},
        complete:()=>{console.log("complete");}
      });

  }

}

