# Micro2lf

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.4.

This was a project for university, due to be completed in 12 hours here I attach the full specification of what was required to be completed (It's in spanish)

 Microproyecto número 2
La empresa de ​Caracas Gaming Spot ha decidido emprender en el área
tecnológica abriendo una oferta de trabajo para el desarrollo de su nueva plataforma de compra de juegos. Para ello ha entregado el siguiente documento con la información técnica que se requiere para participar en este tryout.
es
Se necesita que usted desarrolle una aplicación web​, ​bajo la tecnología de Angular con Firebase as Backend Service para el manejo de la cartera de juegos.
Como requerimientos individuales se pide:
- Vista de ​Home​: se necesita que muestre todos los juegos disponibles, para ello
deberán hacer uso de una API cuya ruta se les dará más adelante.
Adicionalmente, debe tener un campo que permita buscar entre los títulos que actualmente se encuentran en la vista. Por ejemplo: Call of Duty, si existe, lo filtra. Debe haber un botón de ​cargar más​, ya que por cada solicitud sólo trae 20 juegos.
- Cada juego debe mostrar su información básica, tal como: ​Título e Imagen referencial (analisen el JSON y los datos que les da el API para conseguir estos datos)​.
- Al hacerle click, deberá dirigir a una ​nueva vista donde se muestre la información detallada de dicho juego.
- Por último, deberá haber una sección donde se vean los Upcoming Games, o próximos lanzamientos, para ello deberán encontrar la forma de filtrar o solicitar al API aquellos que cumplan con esta característica desde la fecha del ​dia de hoy ​hasta el ​2022-01-01​. Y deberán aparecer en orden de lanzamiento, es decir, desde los más próximos hasta los más lejanos, además de poseer su ​cargar más.
- Vista ​Detalle Juego​: al entrar en esta vista, deberá cargar la información detallada de dicho juego.
- Deberá mostrar [Obligatorio]
● Título
● Descripción
● Fecha de lanzamiento,
● Géneros,
● Desarrolladores y publicadores,
● Rating del juego,
● Plataformas
● Screenshots del mismo
● Videos del trailer del juego [si lo posee].
Cualquier dato adicional que desee colocar, será tomado en consideración como extra.
- En caso que el juego ​NO haya sido lanzado aún, deberá mostrar un título en vez del botón de comprar que diga, proximamente y la fecha de estreno.
- Vista ​COMPRAR​: se mostrará un formulario para que el usuario coloque sus datos personales para la compra del juego seleccionado.

 - Al finalizar dicho formulario, se deberá guardar este registro en la base de datos, y regresar a la vista del Home.
- Vista ​Admin: ​Muestra todas las compras realizadas. [​No se necesita autenticar el usuario​]
- Juego comprado junto con los datos del cliente. [Tabla o lista, por ejemplo]

 Requerimientos funcionales
● Deben utilizar Angular Como Framework de trabajo y Firebase as Backend Service
● Deben implementar Routing para cada vista.
● NO ES NECESARIO HACER USO DE MÓDULOS.
● La data de los juegos será entregado como un end point de la siguiente pagina web:
https://api.rawg.io/docs/
○ Tip: ​Creen sus funciones en un servicio y las importan en cada componente que requiera de algunas de ellas.
● Deberán implementar un CRUD de órdenes.
● Deberá generar componentes, servicios, modelos y pipes, según los requerimientos
previamente mencionados.
● Pueden hacer uso de NgxBootstrap o Angular Material (Bajo su propio riesgo)
● La página debe de ​ser responsive​.
● QUEDA PROHIBIDO EL USO DE TEMPLATES, en caso de usarlos tienen 0.
● El proyecto debe estar en sus repositorios personales, en caso contrario
tienen 0.
● Cualquier intento de plagio o copia entre ustedes, tendrán 0.
● DEBEN HACER USO DE FIREBASE para el Hosteo de la página web.
En caso de que la página NO cumpla esta condición su nota será sobre 10 puntos.
Deberán enviarme un correo electrónico con el link de su repositorio y el link de su página hosteada.
Los que deseen, pueden dejar el link de su página web en el canal de Discord para que sus compañeros puedan verlos luego. Luego de corregirlos, pasarán a formar parte de este repositorio, así que hagan su mayor esfuerzo.
El puntaje está dividido en:
- 14 puntos de requerimientos funcionales y vistas de la página.
- 6 puntos en esfuerzo y diseño.
- La mejor página web tendrá un punto extra.
 
