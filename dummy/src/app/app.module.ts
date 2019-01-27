import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './comp/login/login.component';
import { SignupComponent } from './comp/signup/signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductserviceService } from './service/productservice.service';
import { HomeComponent } from './comp/home/home.component';
import { CartproductComponent } from './comp/cartproduct/cartproduct.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { ActivateIdComponent } from './comp/activate-id/activate-id.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    CartproductComponent,
    ActivateIdComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [ProductserviceService, Location, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
