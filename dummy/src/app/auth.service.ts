
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  constructor(private myRoute: Router) { }

  sendToken(token: string) {
    localStorage.setItem("LoggedInUser", token)
  }

  getToken() {
    console.log(localStorage.getItem("token"));
    return localStorage.getItem("token")
    
  }

  isLoggednIn() {
    return this.getToken() !== "" && this.getToken() !== null;
  }

  logout() {
    localStorage.clear();
    this.myRoute.navigate(["login"]);
  }


}
