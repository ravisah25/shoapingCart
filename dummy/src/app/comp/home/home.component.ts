import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/classes/product';
import { ProductserviceService } from 'src/app/service/productservice.service';
import { ServiceService } from 'src/app/service/service.service';
import { AuthService } from 'src/app/auth.service';
import swal from 'sweetalert2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public items: Product[] = [];
  checked: string[] = [];

  constructor(private productsServices: ProductserviceService, private service: ServiceService, private auth: AuthService, private router: Router) {

    this.productsServices.getProducts()
      .subscribe(
        (success) => {
          this.items = success;
          console.log(success);
          debugger;
        });
  }

  addCart() {
    var objArray = [];
    if (this.auth.isLoggednIn()) {

      this.checked.forEach(element => {
        element["email"] = localStorage.getItem("email");
        objArray.push(element);
      });

      this.service.addToCart(objArray).then(data => {
        this.router.navigate(['/cart']);
      })
    }
    else {
      swal("Please login for add cart");
      this.router.navigate(["/login"]);
    }

  }

  updateChecked(option, event) {
    console.log('event.target.value ' + event.target.value);
    var index = this.checked.indexOf(option);
    if (event.target.checked) {
      console.log('add');
      if (index === -1) {
        this.checked.push(option);
      }
    } else {
      console.log('remove');
      if (index !== -1) {
        this.checked.splice(index, 1);
      }
    }
    //this.checked[option]=event.target.value; // or `event.target.value` not sure what this event looks like
    console.log(this.checked);
  }



  ngOnInit() {
  }

}
