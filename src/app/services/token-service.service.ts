import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
@Injectable({
  providedIn: 'root'
})
export class TokenServiceService {
  extractClientId(token: string): string {
    let decodedToken = this.jwt.decodeToken(token);
    return "";
  }
  private jwt:JwtHelperService = new JwtHelperService();

  constructor() { }

  public extractClientType(token: string ):string {
    let decodedToken = this.jwt.decodeToken(token);
    return decodedToken.clientType;
    
    
  }
}
