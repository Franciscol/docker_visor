import { Component, OnInit } from '@angular/core';
import { DataBrechasServiceService } from './../../services/data-brechas.service.service'; // Asegúrate de que la ruta sea correcta
import Chart from 'chart.js/auto';

import ChartDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-brechas',
  templateUrl: './brechas.component.html',
  styleUrls: ['./brechas.component.css']
})


export class BrechasComponent implements OnInit { // Implementa OnInit para usar el ciclo de vida del componente

  public politicas: any[]; // Declarar una propiedad para almacenar las políticas

  // Referencia al gráfico
  private horizontalBarChart: Chart | null = null;

   // Referencia al gráfico
   private horizontalBarChart2: Chart | null = null;

  constructor(private dataService: DataBrechasServiceService) {
    this.politicas = []; // Inicializa el arreglo vacío en el constructor
  }

  ngOnInit() {
    this.dataService.getChartData().subscribe((data) => {
      this.politicas = data;
    });

    //this.setupChartBrechas();
    this.actualizarGrafico( 2023 )
  }
  

  setupChartBrechasPoliticas(data: number[], labels: string[]) {
    

    // Gráfico 1
    Chart.register(ChartDataLabels);

      // Destruir el gráfico existente si ya hay uno
      if (this.horizontalBarChart) {
        //alert("entro")
        this.horizontalBarChart.destroy();
      }

    const ctx = document.getElementById('horizontalBarChart') as HTMLCanvasElement;

    //var data = [-32, 40, 24, 14, 34, 11, 28, 14, 24, 8, 23, -12, -22, -9, -17, 25, 45, 26, 30];
    //var data = [ 14.79, 12.9, 10.21, 8.11, 8.07, 7.23, 6.23, 4.48, 4.34, 4.12, 3.97, 3.25, 3.14, 3.06, 2.95, 2.1, 1.99, -0.12, -0.54, -0.77, -1.57, -3.1, -3.3, -4.47, -5.17]

    var data = data;
    //var backgroundColor = data.map(value => value >= 0 ? 'rgba(75, 192, 192, 0.2)' : 'rgba(255, 0, 0, 0.2)');
    var backgroundColor = data.map(value => value >= 0 ? '#28a745' : '#dc3545');

    var borderColor = data.map(value => value >= 0 ? 'rgba(75, 192, 192, 1)' : 'rgba(255, 0, 0, 1)');


    //alert("Creando gráfico...");
    this.horizontalBarChart = new Chart(ctx, {
      type: 'bar',
      data: {
        //labels: [ 'Juventud (SDIS)', 'Cultura ciudadana (SCRD)', 'Adultez (SDIS)', 'Servicio a la ciudadanía (SGeneral)', 'Vejez (SDIS)', 'Biodiversidad (SDA)', 'Cultos (SDG)', 'Talento humano (SGeneral)', 'Transparencia (SGeneral)', 'Protección y Bienestar Animal (SDA)', 'Bicicleta (SDM)', 'Mujer (SDMujer)', 'Educación ambiental (SDA)', 'LGBTI (SDP)', 'Familias (SDIS)', 'Trata (SDG)', 'Habitabilidad en calle (SDIS)', 'Hábitat (SDH)', 'Economía cultural (SCRD)', 'Educación (SED)', 'Actividades sexuales pagadas (SDMujer)', 'Deporte (SCRD)', 'Ciencia, tecnología e innovación (SDDE)', 'Derechos humanos (SDG)', 'Seguridad alimentaria (SDDE)'],
        labels: labels,
        datasets: [
          {
            label: '', // Etiqueta vacía
            data: data,
            backgroundColor: backgroundColor,
            borderColor: borderColor,
            borderWidth: 1
          }
        ]
      },
      options: {
        indexAxis: 'y',
        maintainAspectRatio: true,
        hover: {
          mode: 'index',
          intersect: true
        },
        elements: {
          bar: {
            borderWidth: 2,
          }
        },
        responsive: true,
        plugins: {
          title: {
            display: true,
          },
          legend: {
            display: false // Oculta la leyenda
          },
          datalabels: {
            color: 'white', // Color de la etiqueta
            //anchor: 'end', // Posición de la etiqueta
            //align: 'end', // Alineación de la etiqueta
            font: {
              size: 16, // Tamaño de la fuente
            },
            formatter: (value, context) => {
              return value; // Formato de los datos mostrados
            }
          },
        },
        
      }
    });
    //alert("Gráfico creado:" + this.horizontalBarChart);





   
  }


  setupChartBrechasSector(data2: number[], labels2: string[]) {
    
    // Gráfico 2

   // Destruir el gráfico existente si ya hay uno
   if (this.horizontalBarChart2) {
     //alert("entro")
     this.horizontalBarChart2.destroy();
   }

   const ctx2 = document.getElementById('horizontalBarChart2') as HTMLCanvasElement;

    
 
   //var data2 = [-32, -22, -17, -12, -9, 40, 24, 14, 34, 11, 28, 14, 24, 8, 23, 25, 45, 26];
   //var backgroundColor = data.map(value => value >= 0 ? 'rgba(75, 192, 192, 0.2)' : 'rgba(255, 0, 0, 0.2)');
   var backgroundColor = data2.map(value => value >= 0 ? '#28a745' : '#dc3545');
   //var backgroundColor = data.map(value => value >= 0 ? 'rgba(75, 192, 192, 0.2)' : 'rgba(0, 0, 255, 0.2)'); // Rojo para negativos, azul para positivos

   var borderColor = data2.map(value => value >= 0 ? 'rgba(75, 192, 192, 1)' : 'rgba(255, 0, 0, 1)');

   

   this.horizontalBarChart2 = new Chart(ctx2, {
     type: 'bar',
     data: {
       labels: labels2,
       datasets: [
         {
           label: '', // Etiqueta vacía
           data: data2,
           backgroundColor: backgroundColor,
           borderColor: borderColor,
           borderWidth: 1
         }
       ]
     },
     options: {
       indexAxis: 'y',
       maintainAspectRatio: true,
       hover: {
         mode: 'index',
         intersect: true
       },
       elements: {
         bar: {
           borderWidth: 2,
         }
       },
       responsive: true,
       plugins: {
         title: {
           display: true,
         },
         legend: {
           display: false // Oculta la leyenda
         },
         datalabels: {
           color: 'white', // Color de la etiqueta
           //anchor: 'end', // Posición de la etiqueta
           //align: 'end', // Alineación de la etiqueta
           font: {
             size: 16, // Tamaño de la fuente
           },
           formatter: (value, context) => {
             return value; // Formato de los datos mostrados
           }
         },
       },
       
     }
   });


 }


  actualizarGrafico(anio: number) {
    let data: number[] = []; // Inicializar con un arreglo vacío o valores predeterminados
    let labels: string[] = []; // Inicializar con un arreglo vacío o valores predeterminados
    let data2: number[] = []; // Inicializar con un arreglo vacío o valores predeterminados
    let labels2: string[] = []; // Inicializar con un arreglo vacío o valores predeterminados
  

    if (anio === 2022) {
      //alert("2022");
      data = [14.79, 12.9, 10.21, 8.11, 8.07, 7.23, 6.23, 4.48, 4.34, 4.12, 3.97, 3.25, 3.14, 3.06, 2.95, 2.1, 1.99, -0.12, -0.54, -0.77, -1.57, -3.1, -3.3, -4.47, -5.17];
      labels = ['Juventud (SDIS)', 'Cultura ciudadana (SCRD)', 'Adultez (SDIS)', 'Servicio a la ciudadanía (SGeneral)', 'Vejez (SDIS)', 'Biodiversidad (SDA)', 'Cultos (SDG)', 'Talento humano (SGeneral)', 'Transparencia (SGeneral)', 'Protección y Bienestar Animal (SDA)', 'Bicicleta (SDM)', 'Mujer (SDMujer)', 'Educación ambiental (SDA)', 'LGBTI (SDP)', 'Familias (SDIS)', 'Trata (SDG)', 'Habitabilidad en calle (SDIS)', 'Hábitat (SDH)', 'Economía cultural (SCRD)', 'Educación (SED)', 'Actividades sexuales pagadas (SDMujer)', 'Deporte (SCRD)', 'Ciencia, tecnología e innovación (SDDE)', 'Derechos humanos (SDG)', 'Seguridad alimentaria (SDDE)'];
      

      data2 =  [ 5.66, 4.62, 2.55, 1.78, 1.64, 1.39, 1.05, 0.58, 0.39, 0.31, 0.2, 0.17, 0.06, -0.38, -0.71];
      labels2 = [ 'Gestión Jurídica', 'Desarrollo Económico Industria y Turismo ', 'Salud', 'Gestión Pública ', 'Cultura, Recreación y Deporte', 'Integración Social', 'Seguridad, Convivencia y Justicia', 'Gobierno', 'Educación ', 'Movilidad', 'Ambiente', 'Hábitat', 'Planeación ', 'Mujeres', 'Hacienda']

    } else if (anio === 2023) {
      
      //data = [-9.63,-6.07,-5.96,-5.66,-3.9,-3.73,-3.16,-3.02,-2.34,-2.27,-1.68,-1.44,-1.37,-0.87,-0.83,-0.58,0.37,0.81,1.07,1.57,2.56,2.58,2.58,3.03,3.13,3.76,4.07,4.31,4.6,4.98,5.08,5.25,5.32,5.59,6.41,6.46,7.35,8.73,9.04,9.62,10.6,12.82,12.84,13.86];
      data = [13.86, 12.84, 12.82, 10.6,9.62,9.04,8.73,7.35,6.46,6.41,5.59,5.32,5.25,5.08,4.98,4.6,4.31,4.07,3.76,3.13,3.03,2.58,2.58,2.56,1.57,1.07,0.81,-0.37, -0.58, -0.83, -0.87, -1.37, -1.44, -1.68, -2.27, -2.34, -3.02, -3.16, -3.73, -3.9, -5.66, -5.96, -6.07, -9.63 ];
      labels = [ 'Deporte (SCRD)','Movilidad (SDM)','Ciencia, tecnología e innovación (SDDE)','BTI (SGeneral)','Trabajo Decente (SDDE)','Hábitat (SDH)','Protección y Bienestar Animal (SDA)','Seguridad +Paz (SDSCJ)','Acción Climática (SDA)','Pobreza (SDP)','Vendedores Informales (SDDE)','Turismo (SDDE)','Migrantes (SDG)','Espacio Público (SDG)','Comunicación Comunitaria (SDG)','Educación (SED)','LEO (SCRD)','Acción Comunal (SDG)','Actividades sexuales pagadas (SDMujer)','Peatón (SDM)','Seguridad alimentaria (SDDE)','Infancia      (SDIS)','Economía Circular (SDA)','Servicios Públicos (SDH)','Discapacidad (SDIS)','Familias (SDIS)','Habitabilidad en calle (SDIS)','Educación ambiental (SDA)','Talento humano (SGeneral)','Bicicleta (SDM)','Cultos (SDG)','Economía cultural (SCRD)','Productividad      (SDDE)','Mujer (SDMujer)','LGBTI (SDP)','Transparencia (SGeneral)','Derechos humanos (SDG)','Vejez (SDIS)','Servicio a la ciudadanía (SGeneral)','Biodiversidad (SDA)','Adultez (SDIS)','Juventud (SDIS)','Trata (SDG)','Cultura ciudadana (SCRD)']

      data2 = [7.32,7.09,6.66,4.97,4.67,4.46,2.75,2.42,2.37,1.99,0.72,0.7,0.53,-0.5,-1.13];
      labels2 = ['Desarrollo Económico, Industria y Turismo ','Cultura, Recreación y Deporte','Gestión Jurídica','Salud','Gobierno','Mujeres','Integración Social','Ambiente','Gestión Pública','Hábitat','Planeación ','Educación ','Seguridad, Convivencia y Justicia','Movilidad','Hacienda ']

    }

    // Aquí va el código para actualizar el gráfico con los nuevos 'data' y 'labels'
    this.setupChartBrechasPoliticas(data, labels);
    this.setupChartBrechasSector(data2, labels2);
  }
  

  seleccionarAnio(event: Event, anio: number) {
    event.preventDefault();
    this.actualizarGrafico(anio);
  }
  


}

