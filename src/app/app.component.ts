import { Component } from '@angular/core';
import { AuthService } from './auth/Services/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Banking_DotNet';

  hideNavbar!: boolean;
  constructor(private router: Router, private authService: AuthService) {
    this.router.events.subscribe((event) => {
      if (this.router.url === '/auth/login' || this.router.url === '/auth/mobile-login') {
        this.hideNavbar = true;
      } else {
        this.hideNavbar = false;
      }
    });
  }
  get IsLoggedIn(): boolean {
    return this.authService.isAuthenticated();
  }

  UserLogout() {
    this.authService.logout();
    this.router.navigate(['auth/login']);
  }
}

