import { Injectable } from "@angular/core";
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild } from "@angular/router";
import { AuthService } from "../Services/auth-services.service";

@Injectable({
  providedIn: 'root'
})

export class roleGuard implements CanActivate {

  constructor(private userAuthService: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.userAuthService.HaveAccess()) {
      return true;
    } else {
      // alert("Access Denied");
      this.router.navigate(['access-denied']);
      return false;
    }
    //return this.userAuthService.HaveAccess();
  }
}

