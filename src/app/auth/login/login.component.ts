import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginData!: FormGroup;
  returnUrl: any;

  constructor(
    private userAuthService: AuthService, private router: Router,
    private formBuilder: FormBuilder, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.returnUrl = this.route.snapshot.queryParams['redirect'.toString()] || '/';

    this.loginData = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }
  onSubmit() {
    if (this.loginData.valid) {
      console.log("new", this.loginData.value)
      this.userAuthService.Login(this.loginData.value).subscribe(
        (data: any) => {
          this.router.navigate(['auth/verify']);
        },
        (error: any) => {
          this.router.navigate(['user']);
        }
      );
    }
  }
}
