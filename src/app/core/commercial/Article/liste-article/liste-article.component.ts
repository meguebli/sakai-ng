import { ArticleDto } from './../article.dto';
import { Component } from '@angular/core';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-liste-article',
  templateUrl: './liste-article.component.html',
  styleUrls: ['./liste-article.component.scss']
})
export class ListeArticleComponent {
    articles!: ArticleDto[];

    cols!: any[];

    constructor(private articleService: ArticleService) { }

    ngOnInit() {
        this.articleService.getAllArticles().subscribe(data => this.articles = data);

        this.cols = [
            { field: 'IDArticle', header: 'IDArticle' },
            { field: 'Code', header: 'Code' },
            { field: 'Article', header: 'Article' },
            { field: 'IDAr_Couleur', header: 'IDAr_Couleur' },
            { field: 'IDArFamille', header: 'IDArFamille' },
            { field: 'Etat', header: 'Etat' },
            { field: 'IDGamme', header: 'IDGamme' },
            { field: 'IDClient', header: 'IDClient' },
            { field: 'TempsClient', header: 'TempsClient' },
            { field: 'Prix', header: 'Prix' },
            { field: 'TauxTVA', header: 'TauxTVA' },
            { field: 'Image', header: 'Image' },
            { field: 'IdProcess', header: 'IdProcess' },
            { field: 'prixMP', header: 'prixMP' },
            { field: 'CodeDouane', header: 'CodeDouane' },
            { field: 'Composition', header: 'Composition' },
            { field: 'Valeur', header: 'Valeur' },
            { field: 'PrixFac', header: 'PrixFac' },
            { field: 'Cadence', header: 'Cadence' },
            { field: 'SemiFini', header: 'SemiFini' },
            { field: 'PoidsBrut', header: 'PoidsBrut' },
            { field: 'PoidsNet', header: 'PoidsNet' },
            { field: 'ValeurTissu', header: 'ValeurTissu' },
            { field: 'ValeurFourniture', header: 'ValeurFourniture' },
            { field: 'ValeurMP', header: 'ValeurMP' },
            { field: 'TypeTarif', header: 'TypeTarif' },
            { field: 'IDGrille', header: 'IDGrille' },
            { field: 'Reference', header: 'Reference' }
        ];
    }
}
