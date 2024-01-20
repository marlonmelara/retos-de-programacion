/*

* #01  OPERADORES Y ESTRUCTURAS DE CONTROL

* Crea ejemplos utilizando todos los tipos de operadores de tu lenguaje: Aritméticos, lógicos, de comparación asignación, identidad, pertenencia, bits...(Ten en cuenta que cada lenguaje puede poseer unos diferentes).
Utilizando las operaciones con operadores que tú quieras, crea ejemplos que representen todos los tipos de estructuras de control que existan en tu lenguaje: Condicionales, iterativas, excepciones...
Debes hacer print por consola del resultado de todos los ejemplos.

* DIFICULTAD EXTRA (opcional):
* Crea un programa que imprima por consola todos los números comprendidos entre 10 y 55 (incluidos), pares, y que no son ni el 16 ni múltiplos de 3.

* Seguro que al revisar detenidamente las posibilidades has descubierto algo nuevo. */

/********************************
 ** TIPOS DE OPERADORES EN JS
 * 1. Operadores aritméticos
 * 2. Operadores de incremento y decremento unario
 * 3. Operadores de comparación
 * 4. Operadores lógicos
 * 5. Operadores de cadena
 * 6. Operador de asignación
 * 7. Operadores ternarios

 *********************************/

let a = 20;
let b = 3;

// 1. Operadores aritméticos
let suma = `Suma: ${a} + ${b} = ${a + b}`;
let resta = `Resta ${a} - ${b} = ${a - b}`;
let multiplicacion = `Multiplacación ${a} * ${b} = ${a * b}`;
let division = `División ${a} / ${b} = ${a / b}`;
let modulo = `Modulo ${a} % ${b} = ${a % b}`;
let exponente = `Exponente ${a} ** ${b} = ${a ** b}`;

operadorAritmetico = exponente;
console.log(operadorAritmetico);

// 📌 No hay operador de división entera en JS, por lo que se usa la función Math.floor()
console.log(`División entera: ${a} // ${b} = ${Math.floor(a / b)}`);

// 2. Operadores de incremento y decremento unario
// Post-incremento/decremento:
a++;
let incremento = a;
b++;
let decremento = b;

console.log(`Ha incrementado a ${incremento}`);

// Pre-incremento/decremento:
let nuevoIncremento = ++a;
console.log(`Ha incrementado a ${nuevoIncremento}`);
let nuevoDecremento = --a;
console.log(`Ha decrementado a ${nuevoDecremento}`);

let x = 10;
let y = 8;

// 3. Operadores de comparación
let igualdad = `Igualdad: ${x} == ${y} es ${x == y}`;
let desigualdad = `Desigualdad: ${x} != ${y} es ${x != y}`;
let mayorQue = `Mayor que: ${x} > ${y} es ${x > y}`;
let menorQue = `Menor que: ${x} < ${y} es ${x < y}`;
let mayorIgualQue = `Mayor o igual que: ${x} >= ${y} es ${x >= y}`;
let menorIgualQue = `Menor o igual que: ${x} <= ${y} es ${x <= y}`;

operadorComparacion = menorIgualQue;
console.log(operadorComparacion);

// 4. Operadores lógicos
console.log(`AND &&: ${true && true}`); //AND &&: true
console.log(`OR || ${true || true}`); //OR ||: true
console.log(`NOT !: ${!true}`); //NOT !: false

// 5. Operadores de cadena
console.log("Esto es un " + "string");

// 6. Operadores de asignación
let miVariable = 16; // asignación
miVariable += 1; // suma y asignación
miVariable -= 1; // resta y asignación
miVariable *= 2; // multiplicación y asignación
miVariable /= 2; // división y asignación
console.log(miVariable);
miVariable %= 6; // módulo y asignación
console.log(miVariable);
miVariable **= 2; // exponente y asignación
console.log(miVariable);

// 7. Operadores ternarios

let edad = 18;

let admision =
  edad >= 18 ? console.log("puedes entrar") : console.log("no puedes entrar");

/********************************
 ** ESTRUCTURAS DE CONTROL
 * 1. Condicionales
 * 2. Iterativas
 * 3. Operadores de comparación
 * 4. Operadores lógicos
 * 5. Operadores de cadena
 * 6. Operador de asignación
 * 7. Operadores ternarios

 *********************************/

// 1. Condicionales

let age = 15;

if (age >= 18) {
  console.log("puedes entrar");
} else if (age >= 14) {
  console.log("puedes entrar acompañado de un adulto");
} else {
  console.log("no puedes entrar");
}

// 2. Iterativas

// while
let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}

// do while
do {
  console.log(i);
  i++;
} while (i < 10);

// for
for (let i = 0; i < 10; i++) {
  console.log(i);
}

let array = ["Hugo", "Paco", "Luis"];

for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

for (let i = 0; i < array.length; i++) {
  if (array[i] === "Paco") {
    console.log(array[i]); // Paco
    break; // Detiene el bucle una vez que encuentras "Paco"
  }
}

// for...of
let patitos = ["Hugo", "Paco", "Luis"];
for (const elemento of patitos) {
  console.log(elemento);
}

let string = "Hola";
for (const caracter of string) {
  console.log(caracter);
}

// for...in
const hugo = {
  especie: "pato",
  amigos: ["Paco", "Luis", "Rosita"],
  tio: "Pato Donald",
  madre: "Della Pato",
  viceAbuelo: "Fergus McPato",
};

for (const propiedad in hugo) {
  console.log(propiedad);
}

for (const propiedad in hugo) {
  console.log(`Key: ${propiedad}, Value:${hugo[propiedad]}`);
}

// Manejo de excepciones
function dividir(a, b) {
  if (b === 0) {
    throw new Error("No se puede dividir por cero.");
  } else {
    return a / b;
  }
}

try {
  // Intenta ejecutar el código que puede lanzar una excepción
  let resultado = dividir(10, 0);
  console.log(resultado);
} catch (error) {
  // Maneja cualquier error que haya sido lanzado en el bloque try
  console.log("Ha ocurrido un error: " + error.message);
} finally {
  // Este bloque se ejecuta siempre, haya ocurrido un error o no.
  console.log("La operación de división ha sido procesada.");
}

/* DIFICULTAD EXTRA (opcional):
 * Crea un programa que imprima por consola todos los números comprendidos
 * entre 10 y 55 (incluidos), pares, y que no son ni el 16 ni múltiplos de 3.
 */

for (let number = 10; number >= 10 && number <= 55; number++) {
  if (number % 2 == 0 && number != 16 && number % 3 != 0) {
    console.log(number);
  }
}
