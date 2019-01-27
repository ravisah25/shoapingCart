import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './classes/product';

import { Location } from '@angular/common';
import { ServiceService } from './service/service.service';
import { AuthService } from './auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items: any;
  loginStatus: boolean = true;

  constructor(public location: Location,private auth: AuthService, private service: ServiceService) {
  
  }
  ngOnInit(): void {
 
    if (this.auth.isLoggednIn()) {
      this.loginStatus = false;
      let email = localStorage.getItem("email");
    this.service.cartItem(email).then(data => {
      this.items = data;
    })
  }
  }
  
}
