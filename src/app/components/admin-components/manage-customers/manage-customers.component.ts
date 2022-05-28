import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer.model';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-manage-customers',
  templateUrl: './manage-customers.component.html',
  styleUrls: ['./manage-customers.component.css']
})
export class ManageCustomersComponent implements OnInit {

  public customer: Customer = new Customer();
  constructor(private adminService:AdminService) { }

  ngOnInit(): void {
  }

  public deleteCustomer (id:string){
    this.adminService.deleteCustomer(Number(id)).subscribe({next:(id)=>{alert("customer deleted")}, error:(e)=>{alert(e.error.message);}});
  }

  public updateCustomer(id:string,firstName:string,lastName:string, email:string,password:string){
    let customerToUpdate:Customer = new Customer();
    customerToUpdate.id=Number(id);
    customerToUpdate.email=email;
    customerToUpdate.password=password;
    customerToUpdate.firstName=firstName;
    customerToUpdate.lastName=lastName;
    
    this.adminService.updateCustomer(customerToUpdate).subscribe({next:(id)=>{alert("customer updated")}, error:(e)=>{alert(e.error.message);}});
  }
  public addCustomer(){
    this.adminService.addCustomer(this.customer).subscribe({next:(id)=>{alert("customer added")}, error:(e)=>{alert(e.error.message);}});

  }

  

}
