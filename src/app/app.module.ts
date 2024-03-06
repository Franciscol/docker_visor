import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { AvanceAcumuladoComponent } from './pages/avance-acumulado/avance-acumulado.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { PagesComponent } from './pages/pages.component';
import { BreadcrumbsComponent } from './shared/breadcrumbs/breadcrumbs.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { SemaforoComponent } from './pages/semaforo/semaforo.component';

@NgModule({
  declarations: [
    AppComponent,
    AvanceAcumuladoComponent,
    HeaderComponent,
    FooterComponent,
    PagesComponent,
    BreadcrumbsComponent,
    SidebarComponent,
    SemaforoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


