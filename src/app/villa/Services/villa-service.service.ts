import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Villa } from '../Models/Villa.Model';

@Injectable({
  providedIn: 'root'
})
export class VillaService {

  baseApiUrl: string = environment.baseApiUrl;
  constructor(private http: HttpClient) { }

  GetVillas() {
    return this.http.get(this.baseApiUrl + 'api/v1/VillaAPI');
  }
  AddVillas(addVilla: Villa) {
    return this.http.post(this.baseApiUrl + 'api/v1/VillaAPI', addVilla);
  }

  GetVillaById(id: string) {
    return this.http.get(this.baseApiUrl + 'api/v1/VillaAPI/' + id);
  }

  UpdateVillas(id: number, VillaData: Villa) {
    return this.http.put(this.baseApiUrl + 'api/v1/VillaAPI/' + id, VillaData);
  }
  DeleteVillas(id: string) {
    return this.http.delete(this.baseApiUrl + 'api/v1/VillaAPI/' + id);
  }
}
