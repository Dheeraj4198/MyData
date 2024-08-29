import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { VillaService } from 'src/app/villa/Services/villa-service.service';
import { VillaNumber } from '../Models/VillaNumber.Model';
import { VillaNumberService } from '../Services/villa-number.service';

@Component({
  selector: 'app-add-villa-number',
  templateUrl: './add-villa-number.component.html',
  styleUrls: ['./add-villa-number.component.css']
})
export class AddVillaNumberComponent implements OnInit {

  addVillaNumber: VillaNumber = {
    villaID: 0,
    villaNo: 0,
    specialDetails: '',
  }

  addVillaNumberForm: FormGroup;
  villaIDs: any[] = [];

  constructor(private router: Router, private villaNumberService: VillaNumberService,
    private formBuilder: FormBuilder, private villaservice: VillaService) {
    this.addVillaNumberForm = this.formBuilder.group({
      villaNo: ['', Validators.required],
      villaID: ['', Validators.required],
      specialDetails: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.fetchVillaNumber();
  }


  fetchVillaNumber() {
    const villaIds: any = [];
    this.villaservice.GetVillas().subscribe((res: any) => {
      // console.log(res);
      if (Array.isArray(res.result)) {
        for (let i = 0; i < res.result.length; i++) {
          // console.log(res.result[i].id);
          villaIds.push(res.result[i].id);
          // villaIds.push({
          //   id: res.result[i].id,
          //   name: res.result[i].name
          // });
        }
      }
      console.log(villaIds);
      this.villaIDs = villaIds
    });
  }


  markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach((control) => {
      control.markAsTouched();
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }

  AddVillaNumber() {
    if (this.addVillaNumberForm.valid) {
      this.villaNumberService.AddVillaNumber(this.addVillaNumber).subscribe({
        next: (villaNumber) => {
          this.router.navigate(['villaNumber/get-villaNumber']);
        }
      });
    } else {
      this.markFormGroupTouched(this.addVillaNumberForm);
    }
  }
}
