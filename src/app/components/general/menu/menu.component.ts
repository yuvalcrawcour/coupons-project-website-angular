import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenServiceService } from 'src/app/services/token-service.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private router:Router, private tokenService:TokenServiceService) { }

  ngOnInit(): void {
  }

  public checkClientType ():string{
 
    let token = sessionStorage.getItem("token");
    token=token==null?"":token;
    let clientType = this.tokenService.extractClientType(token);
    return clientType;

  }

  public logout(){
    sessionStorage.removeItem("token");
    this.router.navigate(["/"]);
  }

}
