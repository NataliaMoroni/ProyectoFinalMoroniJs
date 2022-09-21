//Mi proyecto será sobre una pagina de nutrición con informarción y venta de productos nutricionales o viandas
/*
function saludar (){
let nombre = prompt("Ingrese su Nombre");
    
     while (nombre === ""){
        alert ("Por favor ingrese los datos solicitados");
        nombre = prompt ("Ingrese su Nombre"); 
    }
    
      let mensaje = `Hola ${nombre} . Bienvenid@!!!`;
      alert (mensaje);
 }
 
 saludar ();
 */
/*
 function imc (){
 
 alert( "Por favor siga las intrucciones para poder obtener correctamente su IMC (índice de masa corporal)");
 
 let estatura = prompt ("Ingrese su Estatura en metros. Debe utilizar punto en lugar de coma");
 let peso = prompt ("Ingrese su Peso en kg");
 let resultado = peso /(estatura * estatura);
 
 alert ("Su índice de masa corporal es :" + resultado);
 
 
 if (resultado <= 18.5) {
     alert ("Usted posee Bajo peso");
 }
 else if (resultado <= 24.9) {
     alert ("Su peso es normal o adecuado");
 } 
 else if(resultado <= 29.9) {
     alert ("Usted se encuentra en sobrepeso");
 } 
 else if (resultado <= 34.9) {
     alert ("Usted posee obesidad de grado 1");
 }
 else if (resultado <= 39.9) {
     alert ("Usted posee obesidad de grado 2");
 }
 else if (resultado >= 40.0) {
     alert ("Usted posee obesidad grado 3 o morbida");
 }
 
 alert ("Gracias por su consulta");
 
 } 
 
 imc ();*/


/*
    let text = "";

    if (imc <= 18.5) {
        text ("Usted posee Bajo peso");
    }
    else if (imc <= 24.9) {
        text ("Su peso es normal o adecuado");
    } 
    else if(imc <= 29.9) {
        text ("Usted se encuentra en sobrepeso");
    } 
    else if (imc <= 34.9) {
       text ("Usted posee obesidad de grado 1");
    }
    else if (imc <= 39.9) {
       text ("Usted posee obesidad de grado 2");
    }
    else if (imc >= 40.0) {
       text ("Usted posee obesidad grado 3 o morbida");
    }
    
    document.getElementById ("text_resultado").innerText=text
         


let calcular = document.getElementById("calcular");
calcular.addEventListener("click", calculador);

calculador()


/*
 let formulario = document.getElementById ("formulario");
 formulario.addEvebtListener("submit", (e) => {
    e.preventDefault ();
    let inputs = e.target.children ;
    console.log(inputs[0].value);
    console.log(inputs [1]. value);
 })

/*
//Confeccion de objetos Productos

class Producto {
    constructor(nombre, precio, detalle){
        this.nombre = nombre;
        this.precio = precio;
        this.detalle = detalle;
        this.vendido = false;
    }
    
    vender (){
        this.vendido = true;
    }
 }

 let producto1= new Producto ("Vianda1",1000,"Vianda tipo tarta saludable a base de vegetales");

 let producto2= new Producto("Vianda2",1000, "Vianda saludable a base de vegetales y carnes rojas");

 producto1. vender();
 console.log("vianda1",producto1);

 

const arregloProducto = [];

for(let i = 0; i < 4; i++){
 let nombre = prompt("ingrese el nombre del producto");
 let precio = prompt("ingrese el precio del producto");
 let detalle = prompt("ingrese el detalle del producto");
 let objeto = new Producto (nombre,precio,detalle);

 arregloProducto.push(objeto);

}

console.log(arregloProducto);


let nombreProducyo= parseInt(prompt("Ingrese la vianda que desea encontrar"));
let producto = arregloProducto.find(item => item.nombre === nombre);
console.log(producto); 

*/