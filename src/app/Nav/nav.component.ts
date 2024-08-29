import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/Services/auth.service';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.css']
})
// export class navComponent {
//     sendMessage = false;
// }
export class navComponent {
    constructor(private router: Router, private authService: AuthService) { }

    get IsLoggedIn(): boolean {
        return this.authService.isAuthenticated();
    }

    UserLogout() {
        this.authService.logout();
        this.router.navigate(['auth/login']);
    }
}