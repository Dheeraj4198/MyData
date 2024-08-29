import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  baseApiUrl: string = environment.baseApiUrl;
  authTokenKey = 'Auth-Token';
  storeToken: any;

  constructor(private http: HttpClient, private router: Router) { }
  // GetAccounts() {
  //   return this.http.get(this.baseApiUrl + 'api/Account');
  // }
  GetAccounts(id: any) {
    return this.http.get(this.baseApiUrl + 'api/Account/' + id);
  }
}