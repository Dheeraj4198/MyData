import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { VillaNumber } from '../Models/VillaNumber.Model';

@Injectable({
  providedIn: 'root'
})
export class VillaNumberService {

  baseApiUrl: string = environment.baseApiUrl;
  constructor(private http: HttpClient) { }

  GetVillaNumber() {
    return this.http.get(this.baseApiUrl + 'api/v1/VillaNumberAPI');
  }

  DeleteVillaNumber(id: string) {
    return this.http.delete(this.baseApiUrl + 'api/v1/VillaNumberAPI/' + id);
  }

  AddVillaNumber(addVillaNumber: VillaNumber) {
    return this.http.post(this.baseApiUrl + 'api/v1/VillaNumberAPI', addVillaNumber);
  }
}