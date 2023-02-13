import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PPRoutingModule } from './pp-routing.module';
import { RendementComponent } from './rendement/rendement.component';
import { TableModule } from 'primeng/table';


@NgModule({
  declarations: [
    RendementComponent
  ],
  imports: [
    CommonModule,
    PPRoutingModule,
    TableModule
  ]
})
export class PPModule { }
