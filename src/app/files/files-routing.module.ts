import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetFilesComponent } from './get-files/get-files.component';
import { AddFilesComponent } from './add-files/add-files.component';

const routes: Routes = [
  {
    path: 'get-files',
    component: GetFilesComponent
  },
  {
    path: 'add-files',
    component: AddFilesComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilesRoutingModule { }
