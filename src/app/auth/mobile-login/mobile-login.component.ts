import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../Services/auth-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { JwtHelperService } from '@auth0/angular-jwt';
import { concatWith } from 'rxjs';

@Component({
  selector: 'app-mobile-login',
  templateUrl: './mobile-login.component.html',
  styleUrls: ['./mobile-login.component.css']
})
export class MobileLoginComponent implements OnInit {
  loginData!: FormGroup;

  constructor(private userAuthService: AuthService, private router: Router,
    private formBuilder: FormBuilder, private route: ActivatedRoute,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.loginData = this.formBuilder.group({
      mobileNumber: ['', [Validators.required]]
    })
  }

  onSubmit() {
    if (this.loginData.valid) {
      console.log("new", this.loginData.value)
      this.userAuthService.MobileLogin(this.loginData.value).subscribe(
        (data: any) => {
          console.log("entered");
          this.router.navigate(["auth/verify"]);
          this.toastr.success("OTP successfully!!!.....");
        },
        (error: any) => {
          console.log(error);
          this.toastr.error("Invalid......");
        }
      );
    }
  }

}
