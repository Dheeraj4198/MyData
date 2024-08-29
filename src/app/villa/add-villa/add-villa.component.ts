import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Villa } from '../Models/Villa.Model';
import { VillaService } from '../Services/villa-service.service';

@Component({
  selector: 'app-add-villa',
  templateUrl: './add-villa.component.html',
  styleUrls: ['./add-villa.component.css']
})
export class AddVillaComponent implements OnInit {

  addVilla: Villa = {
    id: 0,
    name: '',
    occupancy: null,
    rate: null,
    sqft: null,
    amenity: '',
    details: '',
    imageUrl: '',
  }

  addVillaForm!: FormGroup;

  constructor(private router: Router, private villaService: VillaService, private formBuilder: FormBuilder) {
    this.addVillaForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      rate: ['', [Validators.required]],
      details: ['', Validators.required],
      sqft: ['', [Validators.required]],
      occupancy: ['', [Validators.required]],
      amenity: ['', Validators.required],
      imageUrl: ['', Validators.required],
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

  AddVillas() {
    if (this.addVillaForm.valid) {
      this.villaService.AddVillas(this.addVilla).subscribe({
        next: (villa) => {
          this.router.navigate(['villa/get-villa']);
        }
      });
    } else {
      this.markFormGroupTouched(this.addVillaForm);
      // alert("Please enter all fields");
    }
  }
}
