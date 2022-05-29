import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { TokenServiceService } from 'src/app/services/token-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public email:string="";
  public password:string="";
  public clientType:string="";

  constructor(private loginService: LoginService,private router:Router, private tokenService:TokenServiceService) { }

  ngOnInit(): void {
  }
  public login(){
    this.loginService.login(this.email,this.password,this.clientType).subscribe({next:(token)=>{
      sessionStorage.setItem("token",token.toString());
      let clientType=this.tokenService.extractClientType(token.toString());
      if(clientType=="ADMIN"){
        this.router.navigate(["/welcome-admin"]);
      }else{
        if(clientType=="COMPANY"){
          this.router.navigate(["/welcome-company"]);
        }else{
          this.router.navigate(["/welcome-customer"]);
        }
        
      }
      
      console.log(clientType);
    },error:(e)=>{let errAsObj = JSON.parse(e.error);
      alert(errAsObj.error+" "+errAsObj.message);}});
  }
}
