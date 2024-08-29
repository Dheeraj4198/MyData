import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'villa',
    loadChildren: () => import('./villa/villa.module').then(m => m.VillaModule)
  },
  {
    path: 'villaNumber',
    loadChildren: () => import('./villa-number/villa-number.module').then(m => m.VillaNumberModule)
  },
  {
    path: '',
    loadChildren: () => import('./component/component-routing.module').then(m => m.ComponentRoutingModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
