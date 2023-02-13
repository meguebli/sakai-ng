import { OfabricationService } from './../ofabrication.service';
import { OfabricationDto } from './../ofabrication.dto';
import { Component } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';

@Component({
  selector: 'app-liste-ofs',
  templateUrl: './liste-ofs.component.html',
  styleUrls: ['./liste-ofs.component.scss']
})
export class ListeOfsComponent {
    ofs!: OfabricationDto[];
    first: number = 0;
    cols!: any[];

    constructor(private OfabricationService: OfabricationService) { }

    ngOnInit() {
        this.OfabricationService.getAllOF().subscribe(data => this.ofs = data);

        this.cols = [
            { field: 'IDOFabrication', header: 'IDOFabrication' },
            { field: 'OFAbrication', header: 'OFAbrication' },
            { field: 'DtDebut', header: 'DtDebut' },
            { field: 'DtFin', header: 'DtFin' },
            { field: 'DtFin', header: 'Category' },
            { field: 'IDArticle', header: 'IDArticle' },
            { field: 'Quantite', header: 'Quantite' },
            { field: 'IDCommande', header: 'IDCommande' },
            { field: 'IDDetailCmd', header: 'IDDetailCmd' },
            { field: 'Etat', header: 'Etat' },
            { field: 'IDAr_Couleur', header: 'IDAr_Couleur' },
            { field: 'IDGamme', header: 'IDGamme' },
            { field: 'IdProcess', header: 'IdProcess' },
            { field: 'TypeSuivi', header: 'TypeSuivi' },
            { field: 'IDGrille', header: 'IDGrille' },
            { field: 'IDStepOf', header: 'IDStepOf' },
            { field: 'isGrilleCompose', header: 'isGrilleCompose' },
            { field: 'QtteLct', header: 'QtteLct' },
            { field: 'Prix', header: 'Prix' },
            { field: 'prixMP', header: 'prixMP' },
            { field: 'AutresPrix', header: 'AutresPrix' },
            { field: 'DateExport', header: 'DateExport' },
            { field: 'IDChaineMontage', header: 'IDChaineMontage' },
            { field: 'IDTiers', header: 'IDTiers' },
            { field: 'Priorite', header: 'Priorite' },
            { field: 'DateTissu', header: 'DateTissu' },
            { field: 'DateFourniture', header: 'DateFourniture' },
            { field: 'IDCategorieOF', header: 'IDCategorieOF' },
            { field: 'DateExportPrevue', header: 'DateExportPrevue' },
            { field: 'Majoration', header: 'Majoration' },
            { field: 'IDClient', header: 'IDClient' },
            { field: 'IsSemiFini', header: 'IsSemiFini' },
            { field: 'IDOFabricationSF', header: 'IDOFabricationSF' },
            { field: 'NumInterne', header: 'NumInterne' },
            { field: 'DateCreation', header: 'DateCreation' },
            { field: 'RendementPrevu', header: 'RendementPrevu' },
            { field: 'EffectifPrevu', header: 'EffectifPrevu' },
        ];
    }
    reset() {
        this.first = 0;
    }
}
