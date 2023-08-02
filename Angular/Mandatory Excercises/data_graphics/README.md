# DataGraphics

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Informacion general 

La aplicación pretende ser una herramienta para mostrar gráficos de datos en un componente llamado FirstChartComponent. 
Veamos cómo funciona paso a paso:

MyGraphicService (Servicio):

* Contiene una URL base para generar gráficos utilizando la librería QuickChart.
* Tiene algunas propiedades privadas que almacenan datos relacionados con los gráficos, como el ancho, alto, color de fondo, y arreglos para almacenar los datos del gráfico 1 (dataChart1) y del gráfico 2 (dataChart2).
* Define un BehaviorSubject llamado loading$ que se utiliza para controlar el estado de carga de datos. Se inicializa como false.
* Contiene métodos para preparar los datos para los gráficos:
    prepareDataChart1(): Realiza una serie de solicitudes HTTP utilizando la API takeThat() para obtener la población de varios países. Al recibir las respuestas, procesa los datos y los almacena en dataChart1.
    firstChartBuild(): Construye la URL del gráfico de barras utilizando los datos de countries y dataChart1.
    secondChartBuild(): Construye la URL del gráfico de líneas utilizando los datos de months y dataChart2.
Además, tiene métodos y propiedades privadas relacionadas con la API para obtener información de los países y procesar las respuestas HTTP.

FirstChartComponent (Componente):

Este componente es el encargado de mostrar el primer gráfico (firstChartBuild()) utilizando el servicio MyGraphicService.
En el template HTML, tiene un elemento <img> que se enlaza con la propiedad imageUrl del componente. La imagen mostrada proviene de la URL del gráfico de barras construida en el servicio.
En el método ngOnInit(), el componente se suscribe al BehaviorSubject loading$ del servicio. Si el valor de loading$ es false, significa que los datos están listos, por lo que se construye la URL del gráfico de barras y se asigna a imageUrl. La imagen del gráfico se mostrará en el template gracias al atributo *ngIf.
En resumen, el servicio MyGraphicService se encarga de obtener información de población de diferentes países a través de una API. Una vez que los datos están disponibles, se utilizan para construir la URL del gráfico de barras en el componente FirstChartComponent. Cuando el componente recibe la URL del gráfico, se muestra en el template para que el usuario pueda ver la representación gráfica de los datos.

La aplicación utiliza RxJS para gestionar la asincronía y asegurarse de que los datos se carguen antes de mostrar el gráfico. También utiliza BehaviorSubject para indicar cuando los datos están listos para ser utilizados y para controlar la visualización de la imagen del gráfico en el componente.






