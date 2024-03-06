import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AvanceAcumuladoService {

  constructor(private http: HttpClient) { }

  //enviarSolicitud(url: string, body: any): Observable<any> {
  //  return this.http.post<any>(url, body);
  //}

  enviarSolicitud(url: string, body: any): Observable<any> {
    console.log('Agregar Logging en el Servicio:', url);
    
    console.log('URL:', url);
    console.log('Body:', body);
    console.log('PETICIÓN:', this.http.post<any>(url, body));

    return this.http.post<any>(url, body);
  }

  getObjetivosDePolitica(codigoPolitica: string): Observable<any> {
    // Modifica la URL según la estructura de tu API para obtener objetivos relacionados con la política
    //const apiUrl = `URL_DE_TU_API_REST/objetivos?politica=${codigoPolitica}`;

    const url = 'http://10.8.16.105:8080/politicasWeb/consumeService/consume/gateway/visor';
    const body = {
      headers: [],
      metodo: 'GET',
      parametros: '',
      url: `/objetivosEspecificos/${codigoPolitica}` // Cambiado aquí
    };

    //alert("Entro a la solicitud");
    
    //const apiUrl = `api/objetivos?codigoPolitica=${codigoPolitica}`;
    //console.log("este es el parametro de la politica que se envia ", apiUrl );
    //return this.http.get(apiUrl);

    return this.http.post<any>(url, body);
  }

  
  //DATOS GRAFICA POLITICAS METODO
  metodoAdicional(DAT: string): Observable<any> {
    //alert("Alerta desde metodoAdicional en MiServicio " + DAT);

    const url = 'http://10.8.16.105:8080/politicasWeb/consumeService/consume/gateway/visor';
    const body = {
      headers: [],
      metodo: 'GET',
      parametros: '',
      url: `/avancePolitica/${DAT}`
    };

    
    console.log('metodoAdicional URL:', url);
    console.log('metodoAdicional Body:', body);

    //alert("Entro a la solicitud DE DATOS DE LA GRAFICA DE POLITICAS");
    // Aquí puedes añadir más lógica si es necesario
    //return this.http.post<any>(url, body);

    // Realizando la solicitud HTTP y manejando la respuesta
    return this.http.post<any>(url, body).pipe(
      tap(respuesta => console.log("Respuesta desde metodoAdicional en MiServicio:", respuesta))
    );
  }


  getDatosObjetivosGrafica(codigoPolitica: string): Observable<any> {

    const url = 'http://10.8.16.105:8080/politicasWeb/consumeService/consume/gateway/visor';
    const body = {
      headers: [],
      metodo: 'GET',
      parametros: '',
      url: `/avanceObjetivo/${codigoPolitica}` 
    };

    //alert("Entro a la solicitud de datos de la grafica");
    
    //const apiUrl = `api/objetivos?codigoPolitica=${codigoPolitica}`;
    //console.log("este es el parametro de la politica que se envia ", apiUrl );
    //return this.http.get(apiUrl);

    return this.http.post<any>(url, body);
  }

}
