import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GetAccountsComponent } from './get-accounts/get-accounts.component';


@NgModule({
  declarations: [
    GetAccountsComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class AccountModule { }
