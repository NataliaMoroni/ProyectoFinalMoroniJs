 
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
    

  
    if (imc <= 18.5) {
        lectura.innerHTML= "Usted posee Bajo peso";   
        localStorage.imc = lectura.innerHTML;
        Swal.fire({
            
            text: 'Usted posee Bajo peso',
            imageUrl: 'https://dieteticaynutricionweb.files.wordpress.com/2017/01/cropped-promocion-11.png',
            imageWidth: 400,
            imageHeight: 100,
            imageAlt: 'Nutricion y Salud',
          })
    }   
    else if (imc <= 24.9) {
        lectura.innerHTML= "Su peso es normal o adecuado";
        localStorage.lectura = lectura.innerHTML;
        Swal.fire({
            
            text: 'Su peso es normal o adecuado',
            imageUrl: 'https://dieteticaynutricionweb.files.wordpress.com/2017/01/cropped-promocion-11.png',
            imageWidth: 400,
            imageHeight: 100,
            imageAlt: 'Nutricion y Salud',
          })
    } 
    else if(imc <= 29.9) {
        lectura.innerHTML= "Usted posee sobrepeso";
        localStorage.lectura = lectura.innerHTML;
        Swal.fire({
            
            text: 'Usted posee sobrepeso',
            imageUrl: 'https://dieteticaynutricionweb.files.wordpress.com/2017/01/cropped-promocion-11.png',
            imageWidth: 400,
            imageHeight: 100,
            imageAlt: 'Nutricion y Salud',
          })
    } 
    else if (imc <= 34.9) {
        lectura.innerHTML= "Usted posee obesidad de grado 1";
        localStorage.lectura = lectura.innerHTML;
        Swal.fire({
            
            text: 'Usted posee obesidad de grado 1',
            imageUrl: 'https://dieteticaynutricionweb.files.wordpress.com/2017/01/cropped-promocion-11.png',
            imageWidth: 400,
            imageHeight: 100,
            imageAlt: 'Nutricion y Salud',
          })
    }
    else if (imc <= 39.9) {
        lectura.innerHTML= "Usted posee obesidad de grado 2";
        localStorage.lectura = lectura.innerHTML;
        Swal.fire({
            
            text: 'Usted posee obesidad de grado 2',
            imageUrl: 'https://dieteticaynutricionweb.files.wordpress.com/2017/01/cropped-promocion-11.png',
            imageWidth: 400,
            imageHeight: 100,
            imageAlt: 'Nutricion y Salud',
          })
    }
    else if (imc >= 40.0) {
        lectura.innerHTML= "Usted posee obesidad grado 3 o morbida";
        localStorage.lectura = lectura.innerHTML;
        Swal.fire({
            
            text: 'Usted posee obesidad grado 3 o morbida',
            imageUrl: 'https://dieteticaynutricionweb.files.wordpress.com/2017/01/cropped-promocion-11.png',
            imageWidth: 400,
            imageHeight: 100,
            imageAlt: 'Nutricion y Salud',
          })
    } 
     
    
}


let boton = document.getElementById("calcular");
boton.addEventListener("click", calculador);


Swal.fire({
    title: 'Bienvenida/o!! A continuación podrá calcular su Indice de Masa Corporal en pocos pasos',
    showClass: {
      popup: 'animate__animated animate__fadeInDown'
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOutUp'
    }
  })


  //formulario
  const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_x9uvlmy';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Enviar Mensaje';
      Swal.fire('Mensaje enviado correctamente');
    }, (err) => {
      btn.value = 'Enviar Mensaje ';
      alert(JSON.stringify(err));
    });
});


//comentarios
fetch("./data.json")
.then(response => response.json())
.then(data => {
  data.forEach(item => {
    let li = document.createElement("li");
    li.innerHTML = `
      <h1>${item.nombre}</h1>
      
      <p>$${item.comentario}</p>
      <br>
      <br>
    `;
    listado.append(li);
  });
})

//peticion a jsonplaceholder
fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => response.json())
.then(data => {

  let listado = document.getElementById("listado");
  data.forEach(item => {
    
    let li = document.createElement("li");
    li.innerHTML = `
      <h1>Nombre: ${item.name}</h1>
    
      <p>${item.body}</p>
      <br>
      <br>
    `;
    listado.append(li);
  });
})



