import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseApiUrl: string = 'https://localhost:7145/';
  authTokenKey = 'Auth-Token';
  storeToken: any;

  constructor(private http: HttpClient, private router: Router) { }

  Login(data: any) {
    return this.http.post(this.baseApiUrl + 'api/Users/generateOtp', data);
  }
  Verify(data: any) {
    return this.http.post(this.baseApiUrl + 'api/Users/verifyotp', data);
  }
  Register(data: any) {
    return this.http.post(this.baseApiUrl + 'api/Users/register', data)
  }

  logout(): void {
    localStorage.removeItem('Auth-Token');
    localStorage.clear();
  }
  AutoLogout() {
    console.log("Token from localStorage:", this.storeToken);

    if (!this.storeToken) {
      console.log("Token not found in localStorage.");
      return;
    }
    try {
      const tokenData = JSON.parse(atob(this.storeToken.split('.')[1]));
      console.log("Parsed Token Data:", tokenData);

      const expirationTime = tokenData.exp * 1000;
      const currentTime = new Date().getTime();
      const timeUntilExpiration = expirationTime - currentTime;
      console.log("Time Until Expiration:", timeUntilExpiration);

      if (timeUntilExpiration > 0) {
        setTimeout(() => {
          localStorage.removeItem("Auth-Token");
          localStorage.clear();
          this.router.navigate(['auth/login']);
        }, timeUntilExpiration);
      }
    } catch (error) {
      console.error("Error parsing or processing token:", error);
    }
  }

  SetToken(token: string) {
    console.log("Token: " + token);
    this.storeToken = token;
    console.log("Stored token: " + this.storeToken);
    this.AutoLogout();
    return localStorage.setItem("Auth-Token", token);
  }
  SetRole(role: string) {
    console.log("Role: " + role);
    return localStorage.setItem("ROLE", role);
  }
  Get_Token(): string | null {
    var user = localStorage.getItem("Auth-Token");
    return user;
  }

  //used for logout
  isAuthenticated(): boolean {
    return !!localStorage.getItem(this.authTokenKey);
  }

}