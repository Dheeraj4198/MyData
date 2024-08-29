import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VillaComponent } from './get-villa/villa.component';
import { AuthGuard } from '../auth/Guards/auth.guard';
import { AddVillaComponent } from './add-villa/add-villa.component';
import { roleGuard } from '../auth/Guards/role.guard';
import { EditVillaComponent } from './edit-villa/edit-villa.component';

const routes: Routes = [
  {
    path: 'get-villa',
    component: VillaComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'add-villa',
    component: AddVillaComponent,
    // canActivate: [AuthGuard]
    canActivate: [AuthGuard, roleGuard]
  },
  {
    path: '', canActivateChild: [AuthGuard], children: [
      {
        path: 'edit-villa/:id',
        component: EditVillaComponent,
        canActivate: [roleGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VillaRoutingModule { }
