import { Injectable } from '@angular/core';
import { Product } from '../classes/product';
import { HttpClient } from '@angular/common/http';
import { Constant } from '../constant';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  val: any;

  constructor(private http: HttpClient) { }

  async addToCart(item) {
    console.log("item", item);
    return new Promise(resolve => {
      this.http.post(Constant.API_ENDPOINT + '/cart', item)
        .subscribe(data => {
          this.val = data;
          resolve(this.val);
        })
    })
  }

  async cartItem(email) {
    return new Promise(resolve => {
      this.http.get(Constant.API_ENDPOINT + '/cart', { params: { email: email } })
        .subscribe(data => {
          this.val = data;
          resolve(this.val);
        })
    })
  }


  async verify(id) {
    return new Promise(resolve => {
      this.http.get(Constant.API_ENDPOINT + '/verify', { params: { userid: id } })
        .subscribe(data => {
          this.val = data;
          resolve(this.val);
        })
    })
  }


  async signUp(signUpDetails: any) {
    debugger;
    return new Promise(resolve => {
      this.http.post(Constant.API_ENDPOINT + '/register', signUpDetails)
        .subscribe(data => {
          this.val = data;
          resolve(this.val);
        })
    })
  }

  async login(loginData: any) {
    debugger;
    return new Promise(resolve => {
      this.http.post(Constant.API_ENDPOINT + '/login', loginData)
        .subscribe(data => {
          this.val = data;
          resolve(this.val);
        })
    })
  }



}
