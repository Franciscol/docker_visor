import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { AvanceAcumuladoComponent } from './avance-acumulado/avance-acumulado.component';
import { SemaforoComponent } from './semaforo/semaforo.component';
import { BrechasComponent } from './brechas/brechas.component';



const routes: Routes = [
  {path:'dashboard', component: PagesComponent,
    children:[
      {path:'avance-acomulado', component: AvanceAcumuladoComponent},
      {path:'semaforo', component: SemaforoComponent},
      {path:'brechas', component: BrechasComponent},
    ]
  },
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports:[RouterModule]
})
export class PagesRoutingModule { }
