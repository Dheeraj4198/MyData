import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VillaNumberService } from '../Services/villa-number.service';
@Component({
  selector: 'app-get-villa-number',
  templateUrl: './get-villa-number.component.html',
  styleUrls: ['./get-villa-number.component.css']
})
export class GetVillaNumberComponent implements OnInit {

  villaNumber: any;

  constructor(private router: Router, private villaNumberService: VillaNumberService) { }

  ngOnInit(): void {
    this.fetchVillaNumber();
  }

  fetchVillaNumber() {
    this.villaNumberService.GetVillaNumber().subscribe((res: any) => {
      console.log(res);
      if (Array.isArray(res.result)) {
        this.villaNumber = res.result
      }
    });
  }

  DeleteVillaNumber(villaNo: string) {
    this.villaNumberService.DeleteVillaNumber(villaNo).subscribe({
      next: (response) => {
        this.router.navigate(['villaNumber/get-villaNumber']);
        this.fetchVillaNumber();
      }
    })
  }

}
