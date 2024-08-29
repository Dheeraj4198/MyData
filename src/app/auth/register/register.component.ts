import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/auth/Models/User.Model';
import { AuthService } from '../Services/auth-services.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  addUser: User = {
    name: '',
    userName: '',
    password: '',
  }

  addUserForm!: FormGroup;

  constructor(private router: Router, private userAuthService: AuthService, private formBuilder: FormBuilder) {
    this.addUserForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      userName: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  ngOnInit(): void { }


  markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach((control) => {
      control.markAsTouched();
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }

  AddUsers() {
    if (this.addUserForm.valid) {
      this.userAuthService.Register(this.addUser).subscribe({
        next: (user) => {
          this.router.navigate(['auth/login']);
        }
      });
    } else {
      this.markFormGroupTouched(this.addUserForm);
      // alert("Please enter all fields");
    }
  }

}
