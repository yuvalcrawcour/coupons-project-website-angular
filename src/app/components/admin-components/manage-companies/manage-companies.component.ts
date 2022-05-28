import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/models/company.model';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-manage-companies',
  templateUrl: './manage-companies.component.html',
  styleUrls: ['./manage-companies.component.css']
})
export class ManageCompaniesComponent implements OnInit {

  public company: Company= new Company();
  constructor(private adminService:AdminService) { }

  ngOnInit(): void {
  }

  public deleteCompany (id:string){
    this.adminService.deleteCompany(Number(id)).subscribe({next:(id)=>{alert("company deleted")}, error:(e)=>{alert(e.error.message);}});
  }

  public updateCompany(id:string,name:string, email:string,password:string){
    let companyToUpdate:Company = new Company();
    companyToUpdate.id=Number(id);
    companyToUpdate.email=email;
    companyToUpdate.password=password;
    companyToUpdate.name=name;
    
    this.adminService.updateCompany(companyToUpdate).subscribe({next:(id)=>{alert("company updated")}, error:(e)=>{alert(e.error.message);}});
  }
  public addCompany(){
    this.adminService.addCompany(this.company).subscribe({next:(id)=>{alert("company added")}, error:(e)=>{alert(e.error.message);}});

  }

  

}
