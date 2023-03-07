// let datos = prompt("ingrese su nombre");

// if (datos === "") {
//   alert("no ingresaste tu nombre");
// }
// else {
//   alert("bienvenido/a " + datos);
//   let edad = parseInt(prompt("ingrese su edad"));

//   if (edad < 18) {
//     alert("no podes entrar a la pagina");
//   }
//   else if (edad > 90) {
//     alert("no podes entrar a la pagina");
//   }

//   else {
//     alert("podes ingresar a la pagina");
//   }
// }
// let respuesta = prompt("Sos una empresa o una persona?");
// if (respuesta.toUpperCase() === "EMPRESA") {
//   alert("Estas en el lugar correcto");
// }
// else if (respuesta.toUpperCase() === "PERSONA") {
//   alert("Esta pagina es para empresas, si queres reservar un turno, tendrias que reservarlo con el lugar o persona indicada");
// }

// else {
//   alert("No ingresaste si sos empresa o persona");

// } for (let turno = 1; turno <= 1; turno++) {
//   let fecha = prompt("Ingrese una fecha para disponibilidad, utilizando DD/MM/XXXX");
//   let mensaje = `Turno libre :${turno} fecha asignada: ${fecha}`;
//   alert(mensaje);
// }


// alert("calcule el valor de su turno");
// function calculadora(numero1, numero2, operacion) {
//   switch (operacion) {
//     case "sumar":
//       return numero1 + numero2;
//     case "restar":
//       return numero1 - numero2;
//     case "multiplicar":
//       return numero1 * numero2;
//     case "dividir":
//       return numero1 / numero2;
//     default:
//       return "no hay resultado";
//   }
// }

// let numeroUno = parseInt(prompt("ingrese el primer numero"));
// let numeroDos = parseInt(prompt("ingrese el segundo numero"));
// let operacion = prompt("ingrese el tipo de calculo que quiere realizar");

// let resultado = calculadora(numeroUno, numeroDos, operacion);
// let mensaje2 = `El resultado del calculo es: ${resultado}`;
// alert(mensaje2 + ", que tengas un agradable día" );


// /*
// function calculo() {
//   console.log("calcular");
//   return
//   console.log("no calcular");
// }
// calculo();
// */

// function sumar(numero1, numero2) {
//   resultado = numero1 + numero2;
//   console.log(resultado);
// }
// sumar(11, 7);

// // estructura de objeto
// const empresa = {
//   nombre: "web turnos",
//   fundacion: 2022,
//   direccion: "venezuela 2592"
// };

// console.log(empresa.nombre);
// console.log(empresa.fundacion);
// console.log(empresa.direccion);

// const empresa2 = {
//   nombre: "pedi turnos",
//   fundacion: 2020,
//   direccion: "av. de mayo 100"
// };
// console.log(empresa2.nombre);
// console.log(empresa2.fundacion);
// console.log(empresa2.direccion);

// const empresa3 = {
//   nombre: "turnos online",
//   fundacion: 2019,
//   direccion: "corrientes 850"
// };
// console.log(empresa3.nombre);
// console.log(empresa3.fundacion);
// console.log(empresa3.direccion);

// // arreglos
// const nombres = ["turno 1", "turno 2", "turno 3"];
// console.log(nombres[1]);
// console.log(nombres[0]);
// console.log(nombres[2]);

// const arregloNumeros = [1, 3, 7, 10];
// let resultadoSuma = arregloNumeros[3] + arregloNumeros[1];
// console.log(resultadoSuma);


// const productos = [
//   { id: 1, nombre: "agenda 1", precio: 1999 },
//   { id: 2, nombre: "agenda 2", precio: 2999 },
//   { id: 3, nombre: "agenda 3", precio: 5999 },
//   { id: 4, nombre: "agenda 4", precio: 8999 },

// ];




// productos.forEach(producto => {
//   console.log(producto.nombre);
//   console.log(producto.precio);
// });

// for (let index = 0; index < productos.length; index++) {
//   const element = productos[index];
//   console.log(element.nombre);
//   console.log(element.precio);
// }


// let nombre = prompt("ingrese el nombre de la agenda que desea contratar");
// let encontrado = productos.find(producto => producto.nombre === nombre);

// let mensaje = `
//   Id: ${encontrado.id}
//   Nombre: ${encontrado.nombre}
//   Precio: $${encontrado.precio}
// `;

// alert(mensaje);


// let precio = parseInt(prompt("Ingrese el valor mínimo de la agenda que desea contratar"));
// let filtrados = productos.filter((item) => item.precio > precio);

// filtrados.forEach((item) => {
//   let mensaje = `
//     Id: ${item.id}
//     Nombre: ${item.nombre}
//     Precio: $${item.precio}
//   `;
//   alert(mensaje);
// });

let container = document.getElementById("container");

const productos = [
  { id: 1, nombre: "agenda 1", precio: 1999 },
  { id: 2, nombre: "agenda 2", precio: 2999 },
  { id: 3, nombre: "agenda 3", precio: 5999 },
  { id: 4, nombre: "agenda 4", precio: 8999 },
];

productos.forEach(item => {
  let div = document.createElement("div");
  div.innerHTML = `
  <h5 class="card-title">Agenda $${item.precio}<h5/>

  <p class="card-text">

      por mes

      Pedilo
      Gestión de Servicios
      Ficha de Clientes
      Índice de Asistencia
      Cobrá con Mercadopago
      <a href="contacto.html" class="btn btn-danger">Comprar</a>
  `;

  container.append(div);
});

let boton = document.getElementById("boton");
boton.addEventListener("boton", () => console.log("click"));
const saludar = (nombre) => {
  console.log(`Hola ${nombre}`);
};


boton.addEventListener("click", () => saludar("cliente"));

//carga de datos

let formulario = document.getElementById("formulario");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  let inputs = e.target.children;
  console.log(inputs[0].value);
  console.log(inputs[1].value);
});

localStorage.setItem("nombre", "ezequiel")
localStorage.setItem("edad", "31")
localStorage.setItem("valor", true)

let edad = localStorage.getItem("edad");
console.log(edad);

let valor = localStorage.getItem("valor");
console.log(valor);

let nombre = localStorage.getItem("nombre");
console.log(nombre);

//carga de agendas

localStorage.setItem("carrito", JSON.stringify(productos));

let carrito = [];
let carritoStorage = localStorage.getItem("carrito");

if(carritoStorage){
  carrito = JSON.parse(carritoStorage);
}else{
  let comentario = document.createElement("div");
  comentario.innerHTML = "El carrito esta vacio";
  document.body.append(comentario);
}

carrito.forEach(item => {
  let div = document.createElement("div");
  div.innerHTML = `
    <h2>Id: ${item.id}</h2>
    <p>Nombre: ${item.nombre}</p>
    <b>$${item.precio}</b>
  `;

  document.body.append(div);
});





