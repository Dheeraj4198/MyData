import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VillaRoutingModule } from './villa-routing.module';
import { VillaComponent } from './get-villa/villa.component';
import { AddVillaComponent } from './add-villa/add-villa.component';
import { EditVillaComponent } from './edit-villa/edit-villa.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from './helper/filter.pipe';
import { DataTablesModule } from "angular-datatables";


@NgModule({
  declarations: [
    VillaComponent,
    AddVillaComponent,
    EditVillaComponent,
    FilterPipe,
  ],
  imports: [
    CommonModule,
    VillaRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule
  ]
})
export class VillaModule { }
