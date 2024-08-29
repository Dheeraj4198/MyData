import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable, Injector } from "@angular/core";
import { Observable, catchError, tap, throwError } from "rxjs";
import { Router } from "@angular/router";
import { AuthService } from "../auth/Services/auth-services.service";


@Injectable({
  providedIn: 'root'
})
export class TokenIntercetporService implements HttpInterceptor {

  constructor(private inject: Injector, private router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log(req);
    let userAuthService = this.inject.get(AuthService)
    let jwtToken = req.clone({
      setHeaders: {
        Authorization: 'Bearer ' + userAuthService.Get_Token()
      }
    });

    console.log("Jwt Token", jwtToken);
    console.log("Interceptor");
    return next.handle(jwtToken).pipe(
      tap({
        next: (event) => {
          if (event instanceof HttpResponse) {
            if (event.status == 401) {
              this.router.navigate(['auth/login'])
            }
          }
          return event;
        },
        error: (error) => {
          if (error.status === 401) {
            this.router.navigate(['access-denied'])
          }
          else if (error.status === 404) {
            alert('Page Not Found!')
          }
        }
      }));
  }
}
