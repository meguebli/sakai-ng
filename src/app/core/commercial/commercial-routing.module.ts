import { ListeArticleComponent } from './Article/liste-article/liste-article.component';
import { ListeOfsComponent } from './OrdreFabrication/liste-ofs/liste-ofs.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListClientsComponent } from './client/list-clients/list-clients.component';

const routes: Routes = [
    {path:'of',component:ListeOfsComponent},
    {path:'client',component:ListClientsComponent},
    {path:'article',component:ListeArticleComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommercialRoutingModule { }
