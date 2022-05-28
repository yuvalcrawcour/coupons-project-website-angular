import { Component, OnInit } from '@angular/core';
import { TokenServiceService } from 'src/app/services/token-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public clientType:string ="default";

  constructor(private tokenService:TokenServiceService) { }

  ngOnInit(): void {
  }

  public checkClientType ():string{
 
    let token = sessionStorage.getItem("token");
    token=token==null?"":token;
    let clientType = this.tokenService.extractClientType(token);
    return clientType;

  }

}
