import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../Services/auth.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

  constructor(private userAuthService: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.userAuthService.Get_Token()) {
      return true;
    } else {
      this.router.navigate(['auth/login'], { queryParams: { redirect: state.url }, replaceUrl: false });
      return false;
    }
  }
}