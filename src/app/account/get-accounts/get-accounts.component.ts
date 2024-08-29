import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { AccountService } from '../Services/account-service.service';
import * as jwt from 'jsonwebtoken';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Account } from '../Models/accounts.Model';

@Component({
  selector: 'app-get-accounts',
  templateUrl: './get-accounts.component.html',
  styleUrls: ['./get-accounts.component.css']
})
export class GetAccountsComponent implements OnInit {
  //accounts: any;
  filterText: string = '';

  accounts: any = {};

  constructor(private router: Router, private accountService: AccountService, private route: ActivatedRoute) { }

  // ngOnInit(): void {
  //   this.fetch();
  // }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = this.getUserIdFromToken();
        if (id) {
          this.accountService.GetAccounts(id).subscribe({
            next: (response: any) => {
              if (response.result) {
                this.accounts = response.result;
              } else {
                this.router.navigate(['**'])
              }
            },
            error: (error: any) => {
              this.router.navigate(['error'])
            }
          })
        }
      }
    })
  }

  getUserIdFromToken() {
    const token = localStorage.getItem('Auth-Token');
    if (token) {
      const tokenPayload = token.split('.')[1];
      const decodedToken = JSON.parse(atob(tokenPayload));
      const user = decodedToken.UserId;
      console.log(decodedToken);
      console.log(user);
      return user;
    }
  }

  fetch() {
    const userId = this.getUserIdFromToken();
    this.accountService.GetAccounts(userId).subscribe((res: any) => {
      console.log(res);
      if (res.result) {
        this.accounts = res.result;
        console.log(res.result, "data");
      }
    });
  }


}
