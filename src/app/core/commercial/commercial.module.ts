import { TableModule } from 'primeng/table';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommercialRoutingModule } from './commercial-routing.module';
import { ListClientsComponent } from './client/list-clients/list-clients.component';
import { ListeOfsComponent } from './OrdreFabrication/liste-ofs/liste-ofs.component';
import { ListeArticleComponent } from './Article/liste-article/liste-article.component';


@NgModule({
  declarations: [
    ListClientsComponent,
    ListeOfsComponent,
    ListeArticleComponent
  ],
  imports: [
    CommonModule,
    CommercialRoutingModule,
    TableModule
  ]
})
export class CommercialModule { }
