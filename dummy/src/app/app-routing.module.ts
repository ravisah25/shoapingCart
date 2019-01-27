import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './comp/signup/signup.component';
import { LoginComponent } from './comp/login/login.component';
import { HomeComponent } from './comp/home/home.component';
import { CartproductComponent } from './comp/cartproduct/cartproduct.component';
import { AuthGuard } from './auth.guard';
import { ActivateIdComponent } from './comp/activate-id/activate-id.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'login', component: LoginComponent},
  {path: 'verify/:id', component: ActivateIdComponent},
  { path: 'cart', component: CartproductComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
