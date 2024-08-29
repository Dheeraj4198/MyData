import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Villa } from '../Models/Villa.Model';
import { VillaService } from '../Services/villa-service.service';

@Component({
  selector: 'app-edit-villa',
  templateUrl: './edit-villa.component.html',
  styleUrls: ['./edit-villa.component.css']
})
export class EditVillaComponent implements OnInit {
  VillaData: Villa = {
    id: 0,
    name: '',
    occupancy: 0,
    rate: 0,
    sqft: 0,
    amenity: '',
    details: '',
    imageUrl: '',
  }
  constructor(private router: Router, private route: ActivatedRoute, private villaService: VillaService) { }
  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');
        if (id) {
          this.villaService.GetVillaById(id).subscribe({
            next: (response: any) => {
              if (response.result) {
                this.VillaData = response.result;
              } else {
                console.error('Villa with id not found:', id);
                this.router.navigate(['**'])
              }
            },
            error: (error: any) => {
              this.router.navigate(['error'])
            }
          })
        }
      }
    })
  }

  UpdateVillas() {
    return this.villaService.UpdateVillas(this.VillaData.id, this.VillaData).subscribe({
      next: (villa) => {
        this.router.navigate(['villa/get-villa']);
      }
    })
  }
}
