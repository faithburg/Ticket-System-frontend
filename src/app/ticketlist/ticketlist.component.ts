import { Component, OnInit } from '@angular/core';
import { TicketService } from '../ticket.service';

@Component({
  selector: 'app-ticketlist',
  templateUrl: './ticketlist.component.html',
  styleUrls: ['./ticketlist.component.css']
})
export class TicketlistComponent implements OnInit {

  constructor(private _tservice:TicketService) { }

  ngOnInit() {
    this._tservice.fetchTicketListFromRemote().subscribe(
      data => console.log("response received"),
      error => console.log("exception occurred")
    )
  }



}
