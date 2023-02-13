import { Ticket } from './../../rfid/models/ticket';
import { Component } from '@angular/core';
import { RdmtService } from '../rdmt.service';

@Component({
  selector: 'app-rendement',
  templateUrl: './rendement.component.html',
  styleUrls: ['./rendement.component.scss']
})
export class RendementComponent {
    tickets!: Ticket[];

    cols!: any[];

    constructor(private rdmtService: RdmtService) { }

    ngOnInit() {
        this.rdmtService.getAllTickets().subscribe(data => this.tickets = data);

        this.cols = [
            { field: 'code', header: 'Code' },
            { field: 'name', header: 'Name' },
            { field: 'category', header: 'Category' },
            { field: 'quantity', header: 'Quantity' }
        ];
    }
}
