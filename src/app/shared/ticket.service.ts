import { Injectable } from '@angular/core';
import {TicketModel} from './ticket-model';

@Injectable()
export class TicketService {
    private _tickets : TicketModel[];

  constructor() {
    this._tickets = [
        {
            'id': 1,
            'eventId': 1,
            'event': 'Sziget Fesztivál',
            'time': '2018-08-03 18:00',
            'seller': 'Kis Márton',
            'pcs': 9,
            'link': 'licit/1'
        },
        {
            'id': 2,
            'eventId': 2,
            'event': 'Diótörő Balett',
            'time': '2018-06-12 19:00',
            'seller': 'Nagy Ádám',
            'pcs': 6,
            'link': 'licit/2'
        },
        {
            'id': 3,
            'eventId': 2,
            'event': 'MOMA Party',
            'time': '2018-12-07 22:30',
            'seller': 'Brezeviczy Krisztián',
            'pcs': 1,
            'link': 'licit/3'
        },
        {
            'id': 4,
            'eventId': 4,
            'event': 'A Kékszakállú Herceg vára',
            'time': '2019-01-17 10:20',
            'seller': 'Zwack Magdolna',
            'pcs': 15,
            'link': 'licit/4'
        },
        {
            'id': 5,
            'eventId': 4,
            'event': 'Balett mindenkinek',
            'time': '2018-10-23 11:00',
            'seller': 'Schwarz Aurél',
            'pcs': 5,
            'link': 'licit/5'
        },
        {
            'id': 6,
            'eventId': 4,
            'event': 'Macskák Musical',
            'time': '2018-07-13 12:10',
            'seller': 'Nagy Gábor',
            'pcs': 5,
            'link': 'licit/6'
        },
        {
            'id': 7,
            'eventId': 4,
            'event': 'Macskák Musical',
            'time': '2018-11-22 14:00',
            'seller': 'Cserkó József - TEST',
            'pcs': 2,
            'link': 'licit/7'
        },
    ];
  }

    getAllTickets(): TicketModel[] {
        return this._tickets;
    }
}
