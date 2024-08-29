import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../Services/auth-service.service';
import { JwtHelperService } from '@auth0/angular-jwt';

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
    private formBuilder: FormBuilder, private route: ActivatedRoute,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.returnUrl = this.route.snapshot.queryParams['redirect'.toString()] || '/';

    this.loginData = this.formBuilder.group({
      userName: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }
  // onSubmit() {
  //   if (this.loginData.valid) {
  //     console.log("new", this.loginData.value)
  //     this.userAuthService.Login(this.loginData.value).subscribe(
  //       (data: any) => {
  //         this.userAuthService.SetToken(data.result.token);
  //         this.userAuthService.SetRole(data.result.role);
  //         this.router.navigate([this.returnUrl]);
  //         this.toastr.success("You have logged in successfully!!!.....")
  //       },
  //       (error: any) => {
  //         this.toastr.error("Invalid username or password");
  //       }
  //     );
  //   }
  // }

  onSubmit() {
    if (this.loginData.valid) {
      console.log("new", this.loginData.value)
      this.userAuthService.Login(this.loginData.value).subscribe(
        (data: any) => {
          this.userAuthService.SetToken(data.result.token);

          const jwtHelper = new JwtHelperService();
          const decodedToken = jwtHelper.decodeToken(data.result.token);
          const userRole = decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];

          this.userAuthService.SetRole(userRole);

          this.router.navigate([this.returnUrl]);
          this.toastr.success("You have logged in successfully!!!.....")
        },
        (error: any) => {
          this.toastr.error("Invalid username or password");
        }
      );
    }
  }
}

