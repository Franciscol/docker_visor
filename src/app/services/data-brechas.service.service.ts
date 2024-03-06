import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataBrechasServiceService {

  private apiUrl = 'URL_DE_TU_API_REST/PARAMETOR/POLITICA_A'; //URL DEL SERVICIO ORIGINAL QUE PROVEE EL LISTADO DE POLITICAS


  //SERVICIO QUEMADO DE POLITICAS
  private politicas = [
    {"codigoPolitica":"PP-14","nombrePolitica":"Política Pública de Actividades Sexuales Pagadas 2020 - 2029"},
    {"codigoPolitica":"PP-15","nombrePolitica":"Política Pública de Libertades Fundamentales de Religión, Culto y Conciencia para el Distrito Capital 2019-2028"},
    {"codigoPolitica":"PP-4","nombrePolitica":"Política Pública Distrital de Educación Ambiental 2019-2030"},
    {"codigoPolitica":"PP-132","nombrePolitica":"Política Pública Social de Envejecimiento y Vejez"},
    {"codigoPolitica":"PP-170","nombrePolitica":"POLÍTICA DE PRUEBA 2 "},
    {"codigoPolitica":"PP-130","nombrePolitica":"Política Pública para las Familias"},
    {"codigoPolitica":"PP-1","nombrePolitica":"Política Pública Distrital de Transparencia, Integridad y No Tolerancia con la Corrupción"},
    {"codigoPolitica":"PP-13","nombrePolitica":"Política Pública de Cultura Ciudadana 2019-2038"},
    {"codigoPolitica":"PP-131","nombrePolitica":"Política Pública Distrital para el Fenómeno de Habitabilidad en Calle"},
    {"codigoPolitica":"PP-133","nombrePolitica":"Política Pública para la garantía plena de los derechos de las personas lesbianas, gay, bisexuales, transgeneristas e intersexuales- LGBTI ¿ y sobre identidades de género y orientaciones sexuales en el Distrito Capital"},
    {"codigoPolitica":"PP-2","nombrePolitica":"Política Pública Distrital de Servicio a la Ciudadanía"},
    {"codigoPolitica":"PP-5","nombrePolitica":"Política Pública Distrital de Economía Cultural y Creativa 2019-2038"},
    {"codigoPolitica":"PP-110","nombrePolitica":"Política Pública de y para la Adultez"},
    {"codigoPolitica":"PP-90","nombrePolitica":"Política Pública de la Bicicleta"},
    {"codigoPolitica":"PP-10","nombrePolitica":"Política pública de Seguridad Alimentaria y Nutricional para Bogotá: Construyendo Ciudadanía Alimentaria 2019-2031"},
    {"codigoPolitica":"PP-134","nombrePolitica":"Política Pública Distrital de Protección y Bienestar Animal "},
    {"codigoPolitica":"PP-176","nombrePolitica":"Política Pública distrital de turismo ¿Bogotá destino turístico sostenible, inteligente, responsable e incluyente¿ 2023-2033"},
    {"codigoPolitica":"PP-7","nombrePolitica":"Política Pública de Ciencia, Tecnología e Innovación 2019-2038"},
    {"codigoPolitica":"PP-70","nombrePolitica":"Política Pública de Mujeres y Equidad de Género 2020-2030"}
  ];

  constructor(private http: HttpClient) {}

  getChartData(): Observable<any> {
    //return this.http.get(this.apiUrl);  //return original con el servicio
    return of(this.politicas);
  }

}
