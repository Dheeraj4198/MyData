import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.css']
})
export class VerifyComponent implements OnInit {

  loginData1!: FormGroup;
  constructor(
    private userAuthService: AuthService, private router: Router,
    private formBuilder: FormBuilder, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.loginData1 = this.formBuilder.group({
      otp: ['', [Validators.required]]
    })
  }
  onSubmit() {
    if (this.loginData1.valid) {
      console.log("newData", this.loginData1.value)
      this.userAuthService.Verify(this.loginData1.value).subscribe(
        (data: any) => {
          if (data.isSuccess) {
            this.userAuthService.SetToken(data.result.token);
            this.router.navigate(['user']);
          } else {
            alert("Invalid Otp!!!!")
          }
        },
        (error: any) => {
          console.log(error);
          alert("error occurred");
        }
      );
    }
  }
}
