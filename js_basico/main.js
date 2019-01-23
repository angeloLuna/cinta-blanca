// modo estricto de JS
'use strict'

// ECMA 6
// let numero = 20;
// ECMA 5
// var numero = 20

// veremos en las proximas clases
// let booleano = true //false

// let arreglos = [];

// let objetos = {}
// let x = 20;
// todo lo que ingresas en un prompt es de tipo string;
// let saludo = prompt("Ingresa un saludo");
// console.log(typeof saludo);
// saludo = Number(saludo);
// console.log(typeof saludo);


// console.log( saludo + x )


// // ejercicio
// la pagina te debe preguntar tu nombre, edad e email y mostrarlo en consola. (debes usar tres variables)


let nombre = prompt("Nombre");
let edad = prompt("edad");
let email = prompt("email");

let total = nombre + " " + edad + " " + email;

console.log(total)


// // let cuadrado = 0;
// // Input desde el anvegador
// let numero = prompt('Ingresa un número');

// numero = numero * numero;

// // Output en la connsola del navegador
// console.log(numero);

// let numero = prompt('ingresa un número');

// numero = numero * 1

// if (numero) {
//   console.log(numero * numero);
// } else{
//   console.log('Ingresa un número')

// }


// Preguntar al usuario: nombre, primer apellido, segundo apellido; e imprimir en una sola linea los tres. (concatenación);

// pedir al usuario una contraseña y validar que sea igual a 'gatitos13'

// Pedir un número, imprimir la mitad del numero original, imprimir el doble del numero original, imprimir el cuadrado del numero original, imprimir el valor original entre 3

// let nombre = prompt('nombre')
// let apellido = prompt('apellido')
// let apellido2 = prompt('apellido2')

// console.log(nombre + " " + apellido + " " + apellido2)

// let pass = prompt('contraseña');

// if (pass === 'gatitos13' ){
//   console.log('Conntraseña correcta');

// }else{
//   console.log('Conntraseña incorrecta');
// }

let numero = prompt('número');

let mitad = numero / 2;
let doble = numero * 2;
let cuadrado = numero * numero;
let tercio = numero / 3;

console.log(mitad)
console.log(doble)
console.log(cuadrado)
console.log(tercio)

