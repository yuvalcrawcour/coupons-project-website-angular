import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TokenServiceService } from 'src/app/services/token-service.service';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  public currDate: Date = new Date();
  public imgWidth: number = 250;

  constructor(private title: Title, private tokenService: TokenServiceService) {
    if (this.checkClientType() == "ADMIN") {
      this.title.setTitle("Home-admin");
    }
    if (this.checkClientType() == "COMPANY") {
      this.title.setTitle("Home-company");
    }
    if (this.checkClientType() == "COMPANY") {
      this.title.setTitle("Home-customer");
    }


  }

  ngOnInit(): void { }


  public checkClientType(): string {

    let token = sessionStorage.getItem("token");
    token = token == null ? "" : token;
    let clientType = this.tokenService.extractClientType(token);
    return clientType;

  }
}
