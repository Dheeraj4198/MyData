import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FileServiceService } from '../Services/file-service.service';

@Component({
  selector: 'app-get-files',
  templateUrl: './get-files.component.html',
  styleUrls: ['./get-files.component.css']
})
export class GetFilesComponent implements OnInit {
  files: any;

  constructor(private router: Router, private fileService: FileServiceService) { }

  ngOnInit(): void {
    this.fetch();
  }

  fetch() {
    this.fileService.Get().subscribe((res: any) => {
      console.log(res);
      // this.villas = res.result
      if (Array.isArray(res.result)) {
        this.files = res.result
      }
    });
  }
}