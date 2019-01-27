import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/classes/product';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service/service.service';
import { AuthService } from 'src/app/auth.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-cartproduct',
  templateUrl: './cartproduct.component.html',
  styleUrls: ['./cartproduct.component.css']
})
export class CartproductComponent implements OnInit {
  items: {};

  constructor(private service: ServiceService, private auth: AuthService, private router: Router) { 

  
  }
  ngOnInit() {
    if (this.auth.isLoggednIn()) {
      let email = localStorage.getItem("email");
      this.service.cartItem(email).then(data => {
        this.items = data;
      })
    }
    else {
      swal("Please login for add cart");
      this.router.navigate(["/login"]);
    }

  }

}
