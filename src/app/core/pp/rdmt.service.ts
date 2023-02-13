import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ticket } from '../rfid/models/ticket';

@Injectable({
  providedIn: 'root'
})
export class RdmtService {
    baseAPI='http://localhost:4000/api/lecture/all/200';
  constructor(private _http:HttpClient) { }
  /**
   *
   * @returns list of tickets
   */
  getAllTickets():Observable<Ticket[]> {
    return this._http.get<Ticket[]>(this.baseAPI);
  }
  getAllTicketsByDate(date:string):Observable<Ticket[]> {
    return this._http.get<Ticket[]>(this.baseAPI);
}
}
