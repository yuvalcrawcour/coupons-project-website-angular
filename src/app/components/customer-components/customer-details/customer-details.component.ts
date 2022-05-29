import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer.model';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  public customer?:Customer;
  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {

    this.customerService.getCustomerDetails().subscribe({next:(customerFromServer)=>{this.customer=customerFromServer},error:(e)=>{alert(e.error.message)}});
  }

}
