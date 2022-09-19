import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private _http:HttpClient) { }

  fetchTicketListFromRemote():Observable<any>{
    return this._http.get<any>("http://localhost:8080/admin/tickets");
  }
}
