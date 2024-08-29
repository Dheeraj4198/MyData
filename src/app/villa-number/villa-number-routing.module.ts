import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetVillaNumberComponent } from './get-villa-number/get-villa-number.component';
import { AuthGuard } from '../auth/Guards/auth.guard';
import { AddVillaNumberComponent } from './add-villa-number/add-villa-number.component';

const routes: Routes = [
  {
    path: 'get-villaNumber',
    component: GetVillaNumberComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'add-villaNumber',
    component: AddVillaNumberComponent,
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VillaNumberRoutingModule { }
