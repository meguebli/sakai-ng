import { OfabricationDto } from './ofabrication.dto';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OfabricationService {
    BaseAPI='http://localhost:4000/api/of';
  constructor(private _http: HttpClient) { }
  getAllOF():Observable<OfabricationDto[]>{
    return this._http.get<OfabricationDto[]>(this.BaseAPI)
  }
}
