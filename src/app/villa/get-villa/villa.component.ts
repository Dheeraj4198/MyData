import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VillaService } from '../Services/villa-service.service';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-villa',
  templateUrl: './villa.component.html',
  styleUrls: ['./villa.component.css']
})
export class VillaComponent implements OnInit {
  villas: any;
  filterText: string = '';
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  constructor(private router: Router, private villaService: VillaService) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'simple_numbers',
      paging: true,      //page Number
      lengthChange: true,  //show 10 entries per page
      searching: true,  //Search box
      language: {
        searchPlaceholder: 'Text search'
      }
    };
    this.fetchVilla();
  }

  fetchVilla() {
    this.villaService.GetVillas().subscribe((res: any) => {
      console.log(res);
      // this.villas = res.result
      if (Array.isArray(res.result)) {
        this.villas = res.result
        this.dtTrigger.next(null);
      }
    });
  }

  DeleteVillas(id: string) {
    this.villaService.DeleteVillas(id).subscribe({
      next: (response) => {
        this.router.navigate(['villa/get-villa']);
        this.fetchVilla();
      }
    })
  }
}
