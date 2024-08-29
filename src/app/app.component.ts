import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth/Services/auth-services.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MagicVilla_DotNet';
  constructor(private router: Router, private authService: AuthService) { }

  get IsLoggedIn(): boolean {
    return this.authService.isAuthenticated();
  }

  UserLogout() {
    this.authService.logout();
    this.router.navigate(['auth/login']);
  }
}
