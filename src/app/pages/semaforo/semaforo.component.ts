import { Component, OnInit } from '@angular/core';
import { SemaforoService } from '../../services/semaforo.service';

@Component({
  selector: 'app-semaforo',
  templateUrl: './semaforo.component.html',
  styleUrl: './semaforo.component.css'
})


export class SemaforoComponent {

  public politicas: any[]; // Declarar una propiedad para almacenar las políticas

  public indicadores: any[]; // Declarar una propiedad para almacenar los indicadores
  public objetivosEspecificos: any[];
  public indicadoresResultado: any[];
  public indicadoresProducto: any[];

   public datosTabla: any[] = [];

  constructor(private dataService: SemaforoService) {
    this.politicas = []; // Inicializa el arreglo vacío en el constructor
    this.indicadores = []; // Inicializa el arreglo vacío en el constructor
    this.objetivosEspecificos = [];
    this.indicadoresResultado = [];
    this.indicadoresProducto = [];
    
  }

  /*
  public datosTabla: any[] = [
    {
        "productoEsperado": "Actualizar software",
        "sectorLider": "Tecnología y Desarrollo",
        "ponderacion": 55,
        "avanceVigencia": 60,
        "avanceHastaVigencia": 70,
        "avanceAcumulado": 65
    },
    {
        "productoEsperado": "Optimizar base de datos",
        "sectorLider": "Gestión de Datos",
        "ponderacion": 60,
        "avanceVigencia": 50,
        "avanceHastaVigencia": 55,
        "avanceAcumulado": 53
    },
    {
        "productoEsperado": "Mejorar seguridad de la red",
        "sectorLider": "Seguridad Informática",
        "ponderacion": 70,
        "avanceVigencia": 75,
        "avanceHastaVigencia": 80,
        "avanceAcumulado": 78
    }
    // ... más objetos según sea necesario ...
  ];
  */

  ngOnInit() {
    //this.dataService.getPoliticasData().subscribe((data) => {
    //  this.politicas = data;
    //  console.log('Políticas desde el servicio:', this.politicas); // Agregamos un console.log
    //});

    //this.dataService.getIndicadorestData().subscribe((data) => {
    //  this.indicadores = data;
    //  // Separa los indicadores por tipo
    //  this.objetivosEspecificos = this.indicadores.filter((ind) => ind.obj_especifico);
    //  this.indicadoresResultado = this.indicadores.filter((ind) => ind.ind_resultado);
    //  this.indicadoresProducto = this.indicadores.filter((ind) => ind.ind_producto);
    //});

    const url = 'http://10.8.16.105:8080/politicasWeb/consumeService/consume/gateway/visor';
    const body = {
      headers: [],
      metodo: 'GET',
      parametros: '',
      url: '/politicasPublicas'
    };


    this.dataService.enviarSolicitud(url, body).subscribe(
      data => {
        console.log("Entro a la respuesta");

        //alert("Entro a la respuesta");
        console.log(data);
        this.politicas = data;
        
      }
    );
  }


  //politicaSeleccionada: any; // Esta variable almacenará la política seleccionada
  //mostrarPolitica(politica: any) {
  //  this.politicaSeleccionada = politica;
  //  alert("Entro a la solicitud de datos deL SEMAFORO");
  //  this.dataService.getDatosTabla(politica).subscribe((respuesta) => {
  //    console.log("Respuesta de Respuesta del servicio de semaforo", respuesta);
  //  });
  //}
  
politicaSeleccionada: any; // Esta variable almacenará la política seleccionada
mostrarPolitica(politica: any) {
  this.politicaSeleccionada = politica;

  //alert("Entro a la solicitud de datos del semáforo COMPONENTE "+ politica);
  console.log("Entro a la solicitud de datos del semáforo COMPONENTE "+ politica);
  /*  
  this.dataService.getDatosTabla(politica).subscribe((respuesta) => {
    console.log("Respuesta de Respuesta del servicio de semaforo", respuesta);

    // Asumiendo que 'respuesta' es un array de objetos con la estructura necesaria para la tabla
    this.datosTabla = respuesta;
  });
  */

  this.dataService.getDatosTabla(politica.codigoPolitica).subscribe((respuesta) => {
    console.log("Respuesta del servicio de semáforo", respuesta);
    this.datosTabla = respuesta; // Asume que 'respuesta' es el array de datos para la tabla
  });
}


}