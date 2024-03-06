import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AvanceAcumuladoComponent } from './pages/avance-acumulado/avance-acumulado.component';
import { PagesRoutingModule } from './pages/pages-routing.module';

const routes: Routes = [
  //{ path: 'avance-acumulado', component: AvanceAcumuladoComponent }, // Aquí defines la ruta y el componente
  //{ path: '', component: AvanceAcumuladoComponent }, // Aquí defines la ruta y el componente
  { path: '', redirectTo: '/dashboard/brechas', pathMatch: 'full' },
  // Puedes agregar más rutas aquí si es necesario
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
