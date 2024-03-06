import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvanceAcumuladoComponent } from './avance-acumulado/avance-acumulado.component';
import { Router, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { PagesComponent } from './pages.component';
import { SemaforoComponent } from './semaforo/semaforo.component';
import { BrechasComponent } from './brechas/brechas.component';



@NgModule({
  declarations: [
    AvanceAcumuladoComponent,
    PagesComponent,
    SemaforoComponent,
    BrechasComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  exports:[
    AvanceAcumuladoComponent
  ]
})
export class PagesModule { }
