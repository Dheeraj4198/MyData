import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FileServiceService {

  baseApiUrl: string = "http://localhost:7259/";
  constructor(private http: HttpClient) { }

  Get() {
    return this.http.get(this.baseApiUrl + 'api/v1/FileUpload');
  }
}
