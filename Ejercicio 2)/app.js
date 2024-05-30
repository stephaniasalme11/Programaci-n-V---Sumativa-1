/*Programa que muestra un mensaje de Bienvenida, fecha y hora actuales. Por: Stephanía Salmerón. 
Para: Programación V-UBA*/
//Para este ejercicio realizamos lo mismo que lo anterior 
let fechaActual = new Date(); 
        let dia = fechaActual.getDate();
        let mes = fechaActual.getMonth() + 1  ;
        let año = fechaActual.getFullYear();
        let hora = fechaActual.getHours();
        let minutos = fechaActual.getMinutes();
        
    let mensaje = "Bienvenido/a! Hoy es " + dia + "/" + mes + "/" + año + " y son las " + hora + ":" + minutos;

    alert(mensaje);