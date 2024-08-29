import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../Services/auth-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.css']
})
export class VerifyComponent implements OnInit {
  loginData!: FormGroup;

  constructor(private userAuthService: AuthService, private router: Router,
    private formBuilder: FormBuilder, private route: ActivatedRoute,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.loginData = this.formBuilder.group({
      otp: ['', [Validators.required]]
    })
  }
  onSubmit() {
    if (this.loginData.valid) {
      console.log("new", this.loginData.value);
      this.userAuthService.verifyLogin(this.loginData.value).subscribe(
        (data: any) => {
          console.log("entered");
          this.router.navigate(["account/get-account"]);
          this.toastr.success("OTP Verified successfully!!!.....");
        },
        (error: any) => {
          console.log(error);
          this.toastr.error("Invalid......");
        }
      );
    }
  }
}
