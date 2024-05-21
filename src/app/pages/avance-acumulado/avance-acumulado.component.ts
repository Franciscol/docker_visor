import { Component, OnInit } from '@angular/core';
import { AvanceAcumuladoService } from '../../services/avance-acumulado.service';

import Chart from 'chart.js/auto';
//import { TooltipItem } from 'chart.js';
declare var bootstrap: any;

@Component({
  selector: 'app-avance-acumulado',
  templateUrl: './avance-acumulado.component.html',
  styleUrl: './avance-acumulado.component.css'
})
export class AvanceAcumuladoComponent implements OnInit {

  private myChartPoliticas: Chart | null = null;  // Inicializa myChartPoliticas como null
  private myChartObjetivos: Chart | null = null;  // Inicializa myChartObjetivos como null

  public politicas: any[]; // Declarar una propiedad para almacenar las políticas
  public objetivos: any[]; // Agrega esta línea
  public indicadores: any[]; // Declarar una propiedad para almacenar los indicadores
  public objetivosEspecificos: any[];
  public indicadoresResultado: any[];
  public indicadoresProducto: any[];
  public chartData: number[] = [];
  public chartData2: number[] = [];

  public chartData3: number[] = [];
  public chartData4: number[] = [];
  chartLabels: string[];

  chartLabelsObjetivos: string[];
  


  constructor(private miServicio: AvanceAcumuladoService) {

    this.politicas = []; // Inicializa el arreglo vacío en el constructor
    this.objetivos = []; // Inicializa la propiedad de objetivosindex
    this.indicadores = []; // Inicializa el arreglo vacío en el constructor
    this.objetivosEspecificos = [];
    this.indicadoresResultado = [];
    this.indicadoresProducto = [];
    this.chartLabels = []; // Inicializa chartLabels como un array vacío
    this.chartLabelsObjetivos = [];
    
  }

  ngOnInit() {
    const url = 'http://10.8.16.105:8080/politicasWeb/consumeService/consume/gateway/visor';
    const body = {
      headers: [],
      metodo: 'GET',
      parametros: '',
      url: '/politicasPublicas'
    };


    this.miServicio.enviarSolicitud(url, body).subscribe(
      data => {
        console.log("Entro a la respuesta");
        console.log(data);
        this.politicas = data;
      }
    );


    /*Ini Cargar modal*/
    const myModal = new bootstrap.Modal(document.getElementById('miModal'), {
      keyboard: false
    });
    myModal.show();
    /*Fin Cargar modal*/
    
  }


  setupChartPoliticas() {
    //Graphs
    const ctx = document.getElementById('myChartPoliticas') as HTMLCanvasElement;

    if (this.myChartPoliticas) {
      this.myChartPoliticas.destroy(); // Destruye la instancia anterior
    }

    this.myChartPoliticas = new Chart(ctx, {
      data: {
        //labels: ['2018', '2019', '2020', '2021', '2022', '2023', '2024'],
        labels: this.chartLabels, // Utiliza chartLabels como las etiquetas
        datasets: [
          {
            type: 'line',
            label: 'Trayectoria Ideal',
            data: this.chartData, // Usa chartData como datos iniciales
            backgroundColor: '#ced4da',
            borderColor: '#ced4da',
            pointBorderColor: 'green',
            //pointBackgroundColor: '#007bff',
            pointBackgroundColor: 'red',
            fill: false
            // pointHoverBackgroundColor: '#007bff',
            // pointHoverBorderColor    : '#007bff'
          },
          {
            type: 'line',
            label: 'Avance Acumulado',
            data: this.chartData2,
            backgroundColor: '#007bff',
            //borderColor: '#ced4da',
            borderColor: '#007bff',
            pointBorderColor: '#ced4da',
            //pointBackgroundColor: '#ced4da',
            pointBackgroundColor: 'red',
            fill: false
            // pointHoverBackgroundColor: '#ced4da',
            // pointHoverBorderColor    : '#ced4da'
          }
        ]
      },
      options: {
        maintainAspectRatio: false,
        hover: {
          mode: 'index',
          intersect: true
        },
        scales: {
          y: {
            beginAtZero: true,
            suggestedMax: 110,
            grid: {
              display: true,
              color: 'rgba(0, 0, 0, .2)',
            },
          },
          x: {
            display: true,
            grid: {
              display: false
            },
          }
        },
        plugins: {
          title: {
            display: true,
          },
          legend: {
            display: true // Oculta la leyenda
          },
          datalabels: {
            color: '#110303', // Color de la etiqueta
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


  

  setupChartObjetivos(){

    //Graphs
    const ctx = document.getElementById('myChartObjetivos') as HTMLCanvasElement;

    if (this.myChartObjetivos) {
      this.myChartObjetivos.destroy(); // Destruye la instancia anterior
    }

    this.myChartObjetivos = new Chart(ctx, {
      data: {
        //labels: ['18th', '20th', '22nd', '24th', '26th', '28th', '30th'],
        labels: this.chartLabelsObjetivos,
        datasets: [{
          type: 'line',
          label: 'Trayectoria Ideal',
          data: this.chartData3,
          backgroundColor: '#ced4da',
          //borderColor: '#007bff',
          borderColor: '#ced4da',
          pointBorderColor: 'green',
          pointBackgroundColor: 'red',
          fill: false
          // pointHoverBackgroundColor: '#007bff',
          // pointHoverBorderColor    : '#007bff'
        },
        {
          type: 'line',
          label: 'Avance Acumulado',
          data: this.chartData4,
          backgroundColor: '#007bff',
          borderColor: '#007bff',
          pointBorderColor: 'green',
          pointBackgroundColor: 'red',
          fill: false
          // pointHoverBackgroundColor: '#ced4da',
          // pointHoverBorderColor    : '#ced4da'
        }]
      },
      options: {
        maintainAspectRatio: false,
        hover: {
          mode: 'index',
          intersect: true
        },
        scales: {
          y: {
            beginAtZero: true,
            suggestedMax: 100,
            grid: {
              display: true,
              color: 'rgba(0, 0, 0, .2)',
            },
          },
          x: {
            display: true,
            grid: {
              display: false
            },
          }
        },
        plugins: {
          title: {
            display: true,
          },
          legend: {
            display: true // Oculta la leyenda
          },
          datalabels: {
            color: '#110303', // Color de la etiqueta
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
      
    })

  }





//  politicaSeleccionada: any; // Esta variable almacenará la política seleccionada
//  mostrarPolitica(politica: any) {
//    this.politicaSeleccionada = politica;
//
//    this.miServicio.getObjetivosDePolitica(politica.codigoPolitica).subscribe((objetivos) => {
//      this.politicaSeleccionada = politica;
//      this.objetivos = objetivos;
//
//      console.log("ESTOS SON LOS OBJETIVOS DESDE MOSTRAR POLITICA")
//
//      // Llamando al nuevo método en miServicio y manejando la respuesta
//      this.miServicio.metodoAdicional(politica.codigoPolitica).subscribe((respuesta) => {
//        console.log("Respuesta de metodoAdicional COMPONENTE:", respuesta);
//
//        // Asumiendo que 'respuesta' contiene un objeto con la propiedad 'ideal'
//        this.chartData = respuesta.data.map((item: any) => item.valorIdeal);
//        this.chartData2 = respuesta.data.map((item: any) => item.valorAcumulado);
//
//        // Extraer los valores de 'vigencia' para las etiquetas
//        this.chartLabels = respuesta.data.map((item: any) => item.vigencia.toString());
//        
//        this.setupChartPoliticas();
//
//      });
//    });
//  
//  }

politicaSeleccionada: any; // Esta variable almacenará la política seleccionada
objetivoSeleccionado: any;

//mostrarPolitica(politica: any) {
//  this.politicaSeleccionada = politica;
//
//  this.miServicio.getObjetivosDePolitica(politica.codigoPolitica).subscribe((objetivos) => {
//    this.politicaSeleccionada = politica;
//    this.objetivos = objetivos;
//
//    console.log("ESTOS SON LOS OBJETIVOS DESDE MOSTRAR POLITICA");
//
//    // Llamando al nuevo método en miServicio y manejando la respuesta
//    this.miServicio.metodoAdicional(politica.codigoPolitica).subscribe((respuesta) => {
//      console.log("Respuesta de metodoAdicional COMPONENTE:", respuesta);
//
//      const anoActual = new Date().getFullYear();
//
//      // Modificar los valores de respuesta.data según la condición dada
//      const datosModificados = respuesta.data.map((item: any) => ({
//        ...item,
//        valorAcumulado: item.vigencia > anoActual ? null : item.valorAcumulado
//      }));
//
//      this.chartData = datosModificados.map((item: any) => item.valorIdeal);
//      this.chartData2 = datosModificados.map((item: any) => item.valorAcumulado);
//
//      // Extraer los valores de 'vigencia' para las etiquetas
//      this.chartLabels = datosModificados.map((item: any) => item.vigencia.toString());
//
//      this.setupChartPoliticas();
//    });
//  });
//}


mostrarPolitica(politica: any) {

  alert("entrio")
  this.politicaSeleccionada = politica;

  const objetivosQuemados = [
    {
      codigo: 1,
      nombre: "1. Transformación cultural del talento humano."
    },
    {
      codigo: 2,
      nombre: "2. Empoderar el talento humano."
    },
    {
      codigo: 3,
      nombre: "3. Consolidar el sistema de gestión del talento humano."
    }
  ];

  const datosQuemados = [
    { vigencia: 2019, valorIdeal: 4.79, valorAcumulado: 5.73 },
    { vigencia: 2020, valorIdeal: 17.81, valorAcumulado: 19.79 },
    { vigencia: 2021, valorIdeal: 37.48, valorAcumulado: 40.11 },
    { vigencia: 2022, valorIdeal: 50.26, valorAcumulado: 55.22 },
    { vigencia: 2023, valorIdeal: 63.49, valorAcumulado: 65.08 },
    { vigencia: 2024, valorIdeal: 71.33, valorAcumulado: 0 },
    { vigencia: 2025, valorIdeal: 77.02, valorAcumulado: 0 },
    { vigencia: 2026, valorIdeal: 81.9, valorAcumulado: 0 },
    { vigencia: 2027, valorIdeal: 86.51, valorAcumulado: 0 },
    { vigencia: 2028, valorIdeal: 91.23, valorAcumulado: 0 },
    { vigencia: 2029, valorIdeal: 95.59, valorAcumulado: 0 },
    { vigencia: 2030, valorIdeal: 100, valorAcumulado: 0 }
  ];

  const datosQuemados2 = [
    {
      vigencia: 2019,
      valorIdeal: 4.78502121967154,
      valorAcumulado: 5.73
    },
    {
      vigencia: 2020,
      valorIdeal: 17.8090177448894,
      valorAcumulado: 19.79
    },
    {
      vigencia: 2021,
      valorIdeal: 37.4824203159643,
      valorAcumulado: 40.11
    },
    {
      vigencia: 2022,
      valorIdeal: 50.2599391373425,
      valorAcumulado: 55.22
    },
    {
      vigencia: 2023,
      valorIdeal: 63.4868278688333,
      valorAcumulado: 65.08
    },
    {
      vigencia: 2024,
      valorIdeal: 71.3256054850454,
      valorAcumulado: 0
    },
    {
      vigencia: 2025,
      valorIdeal: 77.0154593135367,
      valorAcumulado: 0
    },
    {
      vigencia: 2026,
      valorIdeal: 81.9036259624885,
      valorAcumulado: 0
    },
    {
      vigencia: 2027,
      valorIdeal: 86.5099247290473,
      valorAcumulado: 0
    },
    {
      vigencia: 2028,
      valorIdeal: 91.2333103803036,
      valorAcumulado: 0
    },
    {
      vigencia: 2029,
      valorIdeal: 95.590247466635,
      valorAcumulado: 0
    },
    {
      vigencia: 2030,
      valorIdeal: 100,
      valorAcumulado: 0
    }
  ];

  const datosQuemados1 = [
    {
      vigencia: 2022,
      valorIdeal: 74.48,
      valorAcumulado: 19.832
    },
    {
      vigencia: 2023,
      valorIdeal: 78.50,
      valorAcumulado: 20.288
    },
    {
      vigencia: 2024,
      valorIdeal: 81.20,
      valorAcumulado: 21.008
    }
  ];
  

  // Verifica si la política seleccionada es "PP-134"
  if (politica.codigoPolitica === 'PP-212') {
    // Lógica para cuando la política es "PP-134"
    console.log('Se seleccionó la política PP-134');
    // Aquí puedes implementar lo que necesitas hacer específicamente para esta política
    
    
    // Asignar objetivos quemados
    this.objetivos = objetivosQuemados;

    // Procesar los datos quemados de la misma manera que los datos del servicio
    const anoActual = new Date().getFullYear();
    const datosModificados = datosQuemados.map((item: any) => ({
      ...item,
      valorAcumulado: item.vigencia > anoActual ? null : item.valorAcumulado
    }));

    this.chartData = datosModificados.map((item: any) => item.valorIdeal);
    this.chartData2 = datosModificados.map((item: any) => item.valorAcumulado);
    this.chartLabels = datosModificados.map((item: any) => item.vigencia.toString());

    this.setupChartPoliticas();
    
  } else {
    // Si no es "PP-134", ejecutar los servicios como normalmente lo harías
    this.miServicio.getObjetivosDePolitica(politica.codigoPolitica).subscribe((objetivos) => {
      this.politicaSeleccionada = politica;
      this.objetivos = objetivos;

      console.log("ESTOS SON LOS OBJETIVOS DESDE MOSTRAR POLITICA");

      this.miServicio.metodoAdicional(politica.codigoPolitica).subscribe((respuesta) => {
        console.log("Respuesta de metodoAdicional COMPONENTE:", respuesta);

        const anoActual = new Date().getFullYear();

        const datosModificados = respuesta.data.map((item: any) => ({
          ...item,
          valorAcumulado: item.vigencia > anoActual ? null : item.valorAcumulado
        }));

        this.chartData = datosModificados.map((item: any) => item.valorIdeal);
        this.chartData2 = datosModificados.map((item: any) => item.valorAcumulado);

        this.chartLabels = datosModificados.map((item: any) => item.vigencia.toString());

        this.setupChartPoliticas();
      });
    });
  }
}


//  mostrarObjetivo(objetivo: any) {
//    console.log("ESTOS SON LOS OBJETIVOS DESDE MOSTRAR grafica objetivos " + objetivo.codigo)
//
//      // Llamando al nuevo método en miServicio y manejando la respuesta
//      this.miServicio.getDatosObjetivosGrafica(objetivo.codigo).subscribe((respuesta) => {
//        console.log("Respuesta de getDatosObjetivosGrafica COMPONENTE:", respuesta);
//
//        const anoActual = new Date().getFullYear();
//
//        const datosModificados = respuesta.data.map((item: any) => ({
//          ...item,
//          valorAcumulado: item.vigencia > anoActual ? null : item.valorAcumulado
//        }));
//
//        // Asumiendo que 'respuesta' contiene un objeto con la propiedad 'ideal'
//        this.chartData3 = datosModificados.map((item: any) => item.valorIdeal);
//        this.chartData4 = datosModificados.map((item: any) => item.valorAcumulado);
//
//        // Extraer los valores de 'vigencia' para las etiquetas
//        this.chartLabelsObjetivos = datosModificados.map((item: any) => item.vigencia.toString());
//        
//        this.setupChartObjetivos();
//
//      });
//
//
//  }
 

mostrarObjetivo(objetivo: any) {
  this.objetivoSeleccionado = objetivo.nombre;
      
  console.log("este es OBJETIVO " + objetivo.nombre)
  
  const datosObjetivoQuemados = [
    { vigencia: 2019, valorIdeal: 0.53, valorAcumulado: 0.91 },
    { vigencia: 2020, valorIdeal: 3.41, valorAcumulado: 4.51 },
    { vigencia: 2021, valorIdeal: 10.6, valorAcumulado: 13.09 },
    { vigencia: 2022, valorIdeal: 14.07, valorAcumulado: 18.21 },
    { vigencia: 2023, valorIdeal: 18.67, valorAcumulado: 21.51 },
    { vigencia: 2024, valorIdeal: 20.96, valorAcumulado: 0 },
    { vigencia: 2025, valorIdeal: 23.29, valorAcumulado: 0 },
    { vigencia: 2026, valorIdeal: 25.62, valorAcumulado: 0 },
    { vigencia: 2027, valorIdeal: 27.97, valorAcumulado: 0 },
    { vigencia: 2028, valorIdeal: 30.33, valorAcumulado: 0 },
    { vigencia: 2029, valorIdeal: 32.72, valorAcumulado: 0 },
    { vigencia: 2030, valorIdeal: 35, valorAcumulado: 0 }
  ];

  const datosObjetivoQuemadosEmpoderar = [
    { vigencia: 2019, valorIdeal: 1.32, valorAcumulado: 1.89 },
    { vigencia: 2020, valorIdeal: 7.86, valorAcumulado: 8.16 },
    { vigencia: 2021, valorIdeal: 14.91, valorAcumulado: 15.17 },
    { vigencia: 2022, valorIdeal: 20.8, valorAcumulado: 22.16 },
    { vigencia: 2023, valorIdeal: 26.73, valorAcumulado: 27.08 },
    { vigencia: 2024, valorIdeal: 31.55, valorAcumulado: 0 },
    { vigencia: 2025, valorIdeal: 34.28, valorAcumulado: 0 },
    { vigencia: 2026, valorIdeal: 36.59, valorAcumulado: 0 },
    { vigencia: 2027, valorIdeal: 38.74, valorAcumulado: 0 },
    { vigencia: 2028, valorIdeal: 41.0, valorAcumulado: 0 },
    { vigencia: 2029, valorIdeal: 42.92, valorAcumulado: 0 },
    { vigencia: 2030, valorIdeal: 45, valorAcumulado: 0 }
  ];

  const datosObjetivoQuemadosConsolidar = [
    { vigencia: 2019, valorIdeal: 2.93, valorAcumulado: 2.93 },
    { vigencia: 2020, valorIdeal: 6.54, valorAcumulado: 7.12 },
    { vigencia: 2021, valorIdeal: 11.98, valorAcumulado: 11.85 },
    { vigencia: 2022, valorIdeal: 15.39, valorAcumulado: 14.86 },
    { vigencia: 2023, valorIdeal: 18.08, valorAcumulado: 16.49 },
    { vigencia: 2024, valorIdeal: 18.82, valorAcumulado: 0 },
    { vigencia: 2025, valorIdeal: 19.45, valorAcumulado: 0 },
    { vigencia: 2026, valorIdeal: 19.7, valorAcumulado: 0 },
    { vigencia: 2027, valorIdeal: 19.8, valorAcumulado: 0 },
    { vigencia: 2028, valorIdeal: 19.9, valorAcumulado: 0 },
    { vigencia: 2029, valorIdeal: 19.95, valorAcumulado: 0 },
    { vigencia: 2030, valorIdeal: 20, valorAcumulado: 0 }
  ];

  console.log("ESTOS SON LOS OBJETIVOS DESDE MOSTRAR grafica objetivos " + objetivo.codigo)


  if (objetivo.codigo === 1 ) {

    this.objetivoSeleccionado = objetivo;
    
    console.log('Se seleccionó el objetivo con código 1');

    // Procesar los datos quemados
    const anoActual = new Date().getFullYear();
    const datosModificados = datosObjetivoQuemados.map((item: any) => ({
      ...item,
      valorAcumulado: item.vigencia > anoActual ? null : item.valorAcumulado
    }));

    this.chartData3 = datosModificados.map((item: any) => item.valorIdeal);
    this.chartData4 = datosModificados.map((item: any) => item.valorAcumulado);
    this.chartLabelsObjetivos = datosModificados.map((item: any) => item.vigencia.toString());

    this.setupChartObjetivos();
  } else if (objetivo.codigo === 2 ){

    this.objetivoSeleccionado = objetivo;

    console.log('Se seleccionó el objetivo con código 2');

    // Procesar los datos quemados
    const anoActual = new Date().getFullYear();
    const datosModificados = datosObjetivoQuemadosEmpoderar.map((item: any) => ({
      ...item,
      valorAcumulado: item.vigencia > anoActual ? null : item.valorAcumulado
    }));

    this.chartData3 = datosModificados.map((item: any) => item.valorIdeal);
    this.chartData4 = datosModificados.map((item: any) => item.valorAcumulado);
    this.chartLabelsObjetivos = datosModificados.map((item: any) => item.vigencia.toString());

    this.setupChartObjetivos();

  } else if (objetivo.codigo === 3 ){

    this.objetivoSeleccionado = objetivo;
    console.log('Se seleccionó el objetivo con código 3');

    // Procesar los datos quemados
    const anoActual = new Date().getFullYear();
    const datosModificados = datosObjetivoQuemadosConsolidar.map((item: any) => ({
      ...item,
      valorAcumulado: item.vigencia > anoActual ? null : item.valorAcumulado
    }));

    this.chartData3 = datosModificados.map((item: any) => item.valorIdeal);
    this.chartData4 = datosModificados.map((item: any) => item.valorAcumulado);
    this.chartLabelsObjetivos = datosModificados.map((item: any) => item.vigencia.toString());

    this.setupChartObjetivos();
  }else {
    // Lógica existente para otros códigos de objetivos
    
    // Llamando al nuevo método en miServicio y manejando la respuesta
    this.miServicio.getDatosObjetivosGrafica(objetivo.codigo).subscribe((respuesta) => {
      console.log("Respuesta de getDatosObjetivosGrafica COMPONENTE:", respuesta);

      const anoActual = new Date().getFullYear();

      const datosModificados = respuesta.data.map((item: any) => ({
        ...item,
        valorAcumulado: item.vigencia > anoActual ? null : item.valorAcumulado
      }));

      // Asumiendo que 'respuesta' contiene un objeto con la propiedad 'ideal'
      this.chartData3 = datosModificados.map((item: any) => item.valorIdeal);
      this.chartData4 = datosModificados.map((item: any) => item.valorAcumulado);

      // Extraer los valores de 'vigencia' para las etiquetas
      this.chartLabelsObjetivos = datosModificados.map((item: any) => item.vigencia.toString());
      
      this.setupChartObjetivos();
    });
    
  }
}


}
