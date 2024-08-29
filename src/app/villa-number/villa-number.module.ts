import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VillaNumberRoutingModule } from './villa-number-routing.module';
import { GetVillaNumberComponent } from './get-villa-number/get-villa-number.component';
import { AddVillaNumberComponent } from './add-villa-number/add-villa-number.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    GetVillaNumberComponent,
    AddVillaNumberComponent,
  ],
  imports: [
    CommonModule,
    VillaNumberRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class VillaNumberModule { }
