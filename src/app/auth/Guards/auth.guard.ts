// import { CanActivateFn } from '@angular/router';
// export const AuthGuard: CanActivateFn = (route, state) => {
//   return true;
// };

import { Injectable } from "@angular/core";
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "../Services/auth-services.service";

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate, CanActivateChild {

  constructor(private userAuthService: AuthService, private router: Router) { }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.canActivate(childRoute, state);
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.userAuthService.Get_Token()) {
      return true;
    } else {
      this.router.navigate(['auth/login'], { queryParams: { redirect: state.url }, replaceUrl: false });
      //this.router.navigate(['login']);
      return false;
    }
  }
}