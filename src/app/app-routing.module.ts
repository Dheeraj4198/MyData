import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { ContainerComponent } from './Container/container.component';
import { AuthGuard } from './auth/Guard/auth.guard';


const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: '',
    component: ContainerComponent
  },
  {
    path: 'user',
    component: UserComponent,
    canActivate: [AuthGuard]
  }
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  // imports: [
  //   CommonModule
  // ]
})
export class AppRoutingModule { }
