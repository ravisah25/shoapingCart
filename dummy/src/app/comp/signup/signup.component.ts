import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PasswordValidation } from 'src/app/passwordValidation';
import { ServiceService } from 'src/app/service/service.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signUpForm: any;

  constructor(private formBuilder: FormBuilder, private service:ServiceService, private router:Router) { }

  ngOnInit() {
    this.signUpForm = this.formBuilder.group({
      firstName: [, [Validators.required]],
      verify: ["false", [Validators.required]],
      lastName: [, [Validators.required]],
      email: [, [Validators.required, Validators.pattern("[^ @]*@[^ @]*")]],
      password: [, [Validators.required, Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$")]],
      cPassword: [, [Validators.required, Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$")]],
    }, { validator: PasswordValidation.MatchPassword });
  }

  register() {

    var x =  this.signUpForm.value.firstName ;

    this.service.signUp(this.signUpForm.value).then(data =>{
      if(data === "Already exists"){
        Swal(data);
      }
      else{
      Swal("Please go on mail and activate your account by clicking on link");
    }
    })

  }


  
}