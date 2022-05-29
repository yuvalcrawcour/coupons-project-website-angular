import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Customer } from 'src/app/models/customer.model';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './admin-customer-details.component.html',
  styleUrls: ['./admin-customer-details.component.css']
})
export class AdminCustomerDetailsComponent implements OnInit {
  public customer?: Customer;
  constructor(private activatedRoute:ActivatedRoute,private adminService: AdminService) { }

  ngOnInit(): void {
    let customerId = this.activatedRoute.snapshot.params['id'];

    let subscription = this.adminService.getCustomer(customerId).subscribe({
      next:(comp)=>{this.customer=comp;},
      error:(err)=>{alert(err.error.message)},
      complete: ()=>{subscription.unsubscribe}
    });
  }}
