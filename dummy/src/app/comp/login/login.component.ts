import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ServiceService } from 'src/app/service/service.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: any;

  constructor(private formBuilder: FormBuilder, private service: ServiceService, private router:Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: [, [Validators.required, Validators.pattern("[^ @]*@[^ @]*")]],
      password: [, [Validators.required, Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$")]]
    });

  }

  login() {
    this.service.login(this.loginForm.value).then(data => {
      if (data === "Not Registerd User") {
        Swal(data);
      }
      else if (data === "Wrong Password") {
        Swal(data);
      }
      else {
        localStorage.setItem("token", data['uuid']);
        localStorage.setItem("email",data['email'])
      this.router.navigate(["/"]);
      }
    })

  }
}
