import { ClientDto } from './../client.dto';
import { ClientService } from './../client.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-list-clients',
  templateUrl: './list-clients.component.html',
  styleUrls: ['./list-clients.component.scss']
})
export class ListClientsComponent {
    clients!: ClientDto[];

    cols!: any[];

    constructor(private ClientService: ClientService) { }

    ngOnInit() {
        this.ClientService.getAllClients().subscribe(data => this.clients = data);

        this.cols = [
            { field: 'IDClient', header: 'IDClient' },
            { field: 'Client', header: 'Client' },
            { field: 'Adresse', header: 'Adresse' },
            { field: 'Email', header: 'Email' },
            { field: 'Tel', header: 'Tel' },
            { field: 'Fax', header: 'Fax' },
            { field: 'Couleur', header: 'Couleur' },
            { field: 'Exonere', header: 'Exonere' },
            { field: 'Timbre', header: 'Timbre' },
            { field: 'CodeDouane', header: 'CodeDouane' },
            { field: 'AdresseLivraison', header: 'AdresseLivraison' },
            { field: 'IdCategorieClient', header: 'IdCategorieClient' },
            { field: 'Chiffre', header: 'Chiffre' },
            { field: 'Reglements', header: 'Reglements' },
            { field: 'Solde', header: 'Solde' },
            { field: 'MF', header: 'MF' },
            { field: 'IDModeReglement', header: 'IDModeReglement' },
            { field: 'IDConditionReglement', header: 'IDConditionReglement' },
            { field: 'IDClientFamille', header: 'IDClientFamille' }
        ];
    }
}
