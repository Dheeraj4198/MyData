import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilesRoutingModule } from './files-routing.module';
import { GetFilesComponent } from './get-files/get-files.component';
import { AddFilesComponent } from './add-files/add-files.component';


@NgModule({
  declarations: [
    GetFilesComponent,
    AddFilesComponent
  ],
  imports: [
    CommonModule,
    FilesRoutingModule
  ]
})
export class FilesModule { }
