import { ClientDto } from './client.dto';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
    baseAPI='http://localhost:4000/api/client';
  constructor(private _http : HttpClient) { }
  getAllClients():Observable<ClientDto[]> {
    return this._http.get<ClientDto[]>(this.baseAPI)
};
}
