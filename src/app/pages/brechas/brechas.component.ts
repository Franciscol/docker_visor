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

      //data2 = [14.79, 12.9, 10.21, 8.11, 8.07, 7.23, 6.23, 4.48, 4.34, 4.12, 3.97, 3.25, 3.14, 3.06, 2.95, 2.1, 1.99, -0.12, -0.54, -0.77, -1.57, -3.1, -3.3, -4.47, -5.17];
      //labels2 = ['Juventud (SDIS)', 'Cultura ciudadana (SCRD)', 'Adultez (SDIS)', 'Servicio a la ciudadanía (SGeneral)', 'Vejez (SDIS)', 'Biodiversidad (SDA)', 'Cultos (SDG)', 'Talento humano (SGeneral)', 'Transparencia (SGeneral)', 'Protección y Bienestar Animal (SDA)', 'Bicicleta (SDM)', 'Mujer (SDMujer)', 'Educación ambiental (SDA)', 'LGBTI (SDP)', 'Familias (SDIS)', 'Trata (SDG)', 'Habitabilidad en calle (SDIS)', 'Hábitat (SDH)', 'Economía cultural (SCRD)', 'Educación (SED)', 'Actividades sexuales pagadas (SDMujer)', 'Deporte (SCRD)', 'Ciencia, tecnología e innovación (SDDE)', 'Derechos humanos (SDG)', 'Seguridad alimentaria (SDDE)'];
      //labels2 = [ 'Gestión Jurídica', 'Desarrollo Económico Industria y Turismo ', 'Salud', 'Gestión Pública ', 'Cultura, Recreación y Deporte', 'Integración Social', 'Seguridad, Convivencia y Justicia', 'Gobierno', 'Educación ', 'Movilidad', 'Ambiente', 'Hábitat', 'Planeación ', 'Mujeres', 'Hacienda']

      //data2 = [14.79, 12.9, 10.21, 8.11, 8.07, 7.23, 6.23, 4.48, 4.34, 4.12, 3.97, 3.25, 3.14, 3.06, 2.95, 2.1, 1.99, -0.12, -0.54, -0.77, -1.57, -3.1, -3.3, -4.47, -5.17];
      //data2 = [ 5.66, 4.62, 2.55, 1.78, 1.64, 1.39, 1.05, 0.58, 0.39, 0.31, 0.2, 0.17, 0.06, -0.38, -0.71];
      //labels2 = [ 'Gestión Jurídica', 'Desarrollo Económico Industria y Turismo ', 'Salud', 'Gestión Pública ', 'Cultura, Recreación y Deporte', 'Integración Social', 'Seguridad, Convivencia y Justicia', 'Gobierno', 'Educación ', 'Movilidad', 'Ambiente', 'Hábitat', 'Planeación ', 'Mujeres', 'Hacienda']

      //data2 = [14.79, 12.9, 10.21, 8.11, 8.07, 7.23, 6.23, 4.48, 4.34, 4.12, 3.97, 3.25, 3.14, 3.06, 2.95, 2.1, 1.99, -0.38, -0.71];
      //data2 = [14.79, 12.9, 10.21, 8.11, 8.07, 7.23, 6.23, 4.48, 4.34, 4.12, 3.97, 3.25, 3.14, 3.06, -0.12, -0.54, -0.77, -1.57, -3.1, -3.3, -4.47, -5.17];
      //labels2 = [ 'Gestión Jurídica', 'Desarrollo Económico Industria y Turismo ', 'Salud', 'Gestión Pública ', 'Cultura, Recreación y Deporte', 'Integración Social', 'Seguridad, Convivencia y Justicia', 'Gobierno', 'Educación ', 'Movilidad', 'Ambiente', 'Hábitat', 'Planeación ', 'Mujeres', 'Hacienda']

      data2 =  [ 5.66, 4.62, 2.55, 1.78, 1.64, 1.39, 1.05, 0.58, 0.39, 0.31, 0.2, 0.17, 0.06, -0.38, -0.71];
      labels2 = [ 'Gestión Jurídica', 'Desarrollo Económico Industria y Turismo ', 'Salud', 'Gestión Pública ', 'Cultura, Recreación y Deporte', 'Integración Social', 'Seguridad, Convivencia y Justicia', 'Gobierno', 'Educación ', 'Movilidad', 'Ambiente', 'Hábitat', 'Planeación ', 'Mujeres', 'Hacienda']



    } else if (anio === 2023) {
      //alert("2023");
      //data = [ 15.53, 12.59, 11.93, 9.02, 8.58, 8.54, 7.89, 7.38, 7.34, 6.69, 6.67, 6.27, 5.59, 5.45, 5.1, 4.99, 4.61, 4.39, 4.04, 3.47, 3.46, 3.03, 2.39, 2.11, 1.92, 1.05, 1.02, -0.2, -0.22, -1.26, -3.02, -4.95, -5.31, -6.11,];
      //labels = ['Juventud (SDIS)', 'Cultura ciudadana (SCRD)', 'Adultez (SDIS)', 'Servicio a la ciudadanía (SGeneral)', 'Espacio Público (SDG)', 'Pobreza (SDP)', 'Vejez (SDIS)', 'Biodiversidad (SDA)', 'LGBTI (SDP)', 'Transparencia (SGeneral)', 'Bicicleta (SDM)', 'Cultos (SDG)', 'Talento humano (SGeneral)', 'Educación ambiental (SDA)', 'Mujer (SDMujer)', 'Habitabilidad en calle (SDIS)', 'Educación (SED)', 'Discapacidad (SDIS)', 'Turismo (SDDE)', 'Familias (SDIS)', 'Infancia (SDIS)', 'Derechos humanos (SDG)', 'Trata (SDG)', 'LEO (SCRD)', 'Productividad (SDDE)', 'Movilidad (SDM)', 'Acción Comunal (SDG)', 'Economía cultural (SCRD)', 'Hábitat (SDH)', 'Actividades sexuales pagadas (SDMujer)', 'Deporte (SCRD)', 'Ciencia, tecnología e innovación (SDDE)', 'Seguridad alimentaria (SDDE)', 'Protección y Bienestar Animal (SDA)'];

      data = [ 15.53, 12.59, 11.93, 9.02, 8.58, 8.54, 7.89, 7.38, 7.34, 6.69, 6.67, 6.27, 5.59, 5.45, 5.1, 4.99, 4.61, 4.39, 4.04, 3.47, 3.46, 3.03, 2.39, 2.11, 1.92, 1.05, 1.02, -0.2, -0.22, -1.26, -3.02, -4.95, -5.31, -6.11,];
      labels = ['Juventud (SDIS)', 'Cultura ciudadana (SCRD)', 'Adultez (SDIS)', 'Servicio a la ciudadanía (SGeneral)', 'Espacio Público (SDG)', 'Pobreza (SDP)', 'Vejez (SDIS)', 'Biodiversidad (SDA)', 'LGBTI (SDP)', 'Transparencia (SGeneral)', 'Bicicleta (SDM)', 'Cultos (SDG)', 'Talento humano (SGeneral)', 'Educación ambiental (SDA)', 'Mujer (SDMujer)', 'Habitabilidad en calle (SDIS)', 'Educación (SED)', 'Discapacidad (SDIS)', 'Turismo (SDDE)', 'Familias (SDIS)', 'Infancia (SDIS)', 'Derechos humanos (SDG)', 'Trata (SDG)', 'LEO (SCRD)', 'Productividad (SDDE)', 'Movilidad (SDM)', 'Acción Comunal (SDG)', 'Economía cultural (SCRD)', 'Hábitat (SDH)', 'Actividades sexuales pagadas (SDMujer)', 'Deporte (SCRD)', 'Ciencia, tecnología e innovación (SDDE)', 'Seguridad alimentaria (SDDE)', 'Protección y Bienestar Animal (SDA)'];

      
      //data2 = [14.79, 12.9, 10.21, 8.11, 8.07, 7.23, 6.23, 4.48, 4.34, 4.12, 3.97, 3.25, 3.14, 3.06, 2.95, 2.1, 1.99, -0.12, -0.54, -0.77, -1.57, -3.1, -3.3, -4.47, -5.17];
      //data2 = [ 2.38, 3.04, 3.71, 4.15, 4.32, 4.97, 5.7, 5.96, 6.21, 6.27, 6.51, 6.59, 9.89, 10.25, -0.81];
      //var data = [ -0,0081, 0,0238, 0,0304, 0,0371, 0,0415, 0,0432, 0,0497, 0,057, 0,0596, 0,0621, 0,0627, 0,0651, 0,0659, 0,0989, 0,1025];
      //labels2 = [ 'Planeación ', 'Movilidad', 'Hábitat', 'Educación ', 'Integración Social', 'Gobierno', 'Mujeres', 'Gestión Jurídica', 'Cultura, Recreación y Deporte', 'Seguridad, Convivencia y Justicia', 'Gestión Pública ', 'Ambiente', 'Salud', 'Hacienda ', 'Desarrollo Económico, Industria y Turismo ']

      // Datos organizados de mayor a menor
      data2 = [10.25, 9.89, 6.59, 6.51, 6.27, 6.21, 5.96, 5.7, 4.97, 4.32, 4.15, 3.71, 3.04, 2.38, -0.81];

      // Etiquetas correspondientes a los datos organizados
      labels2 = ['Hacienda ', 'Salud', 'Ambiente', 'Gestión Pública ', 'Seguridad, Convivencia y Justicia', 'Cultura, Recreación y Deporte', 'Gestión Jurídica', 'Mujeres', 'Gobierno', 'Integración Social', 'Educación ', 'Hábitat', 'Movilidad', 'Planeación ', 'Desarrollo Económico, Industria y Turismo'];

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

