 
function calculador(){
    let resultado = document.getElementById ("resultado");
    let lectura= document.getElementById("lectura");

    let altura = document.getElementById("altura").value / 100;
    localStorage.altura = altura;
    let peso = document.getElementById("peso"). value;  
    localStorage.peso = peso;
    
    let imc = peso / altura **2;

   
    resultado.innerHTML=imc;
    localStorage.imc = imc;
    //console.log(imc);
    

  
    if (imc <= 18.5) {
        lectura.innerHTML= "Usted posee Bajo peso";   
        localStorage.imc = lectura.innerHTML;
    }   
    else if (imc <= 24.9) {
        lectura.innerHTML= "Su peso es normal o adecuado";
        localStorage.lectura = lectura.innerHTML;
    } 
    else if(imc <= 29.9) {
        lectura.innerHTML= "Usted posee sobrepeso";
        localStorage.lectura = lectura.innerHTML;
    } 
    else if (imc <= 34.9) {
        lectura.innerHTML= "Usted posee obesidad de grado 1";
        localStorage.lectura = lectura.innerHTML;
    }
    else if (imc <= 39.9) {
        lectura.innerHTML= "Usted posee obesidad de grado 2";
        localStorage.lectura = lectura.innerHTML;
    }
    else if (imc >= 40.0) {
        lectura.innerHTML= "Usted posee obesidad grado 3 o morbida";
        localStorage.lectura = lectura.innerHTML;
    } 
     
    
}


let boton = document.getElementById("calcular");
boton.addEventListener("click", calculador);



