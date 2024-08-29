import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MobileLoginComponent } from './mobile-login/mobile-login.component';
import { RegisterComponent } from './register/register.component';
import { VerifyComponent } from './verify/verify.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'mobile-login',
    component: MobileLoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'verify',
    component: VerifyComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
