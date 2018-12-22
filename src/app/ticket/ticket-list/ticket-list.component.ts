import { Component, OnInit } from '@angular/core';
import {TicketService} from '../../shared/ticket.service';
import {TicketModel} from '../../shared/ticket-model';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent implements OnInit {
  public ticketgroup: TicketModel[];

  constructor(private _ticketService: TicketService) { }

  ngOnInit() {
    this.ticketgroup = this._ticketService.getAllTickets();
  }
}
