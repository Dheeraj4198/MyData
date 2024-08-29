import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetAccountsComponent } from './get-accounts/get-accounts.component';


const routes: Routes = [
  {
    path: 'get-account',
    component: GetAccountsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
