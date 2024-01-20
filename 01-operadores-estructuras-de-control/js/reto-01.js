// Operadores aritméticos
console.log(`Suma: 10 + 3 = ${10 + 3}`);
console.log(`Resta: 10 - 3 = ${10 - 3}`);
console.log(`Multiplicación: 10 * 3 = ${10 * 3}`);
console.log(`División: 10 / 3 = ${10 / 3}`);
console.log(`Módulo: 10 % 3 = ${10 % 3}`);
console.log(`Exponente: 10 ** 3 = ${10 ** 3}`);

// No hay operador de división entera en JS, por lo que se usa la función Math.floor()
console.log(`División entera: 10 // 3 = ${Math.floor(10 / 3)}`);

// Operadores de comparación
console.log(`Igualdad: 10 == 3 es ${10 == 3}`);
console.log(`Desigualdad: 10 != 3 es ${10 != 3}`);
console.log(`Mayor que: 10 > 3 es ${10 != 3}`);
console.log(`Menor que: 10 < 3 es ${10 != 3}`);
console.log(`Mayor o igual que: 10 >= 10 es ${10 >= 10}`);
console.log(`Menor o igual que: 10 <= 3 es ${10 <= 3}`);

// Operadores lógicos
console.log(
  `AND &&: 10 + 3 == 13 and 5 - 1 == 4 es ${10 + 3 == 13 && 5 - 1 == 4}`
);
console.log(
  `OR ||: 10 + 3 == 14 or 5 - 1 == 4 es ${10 + 3 == 14 || 5 - 1 == 4}`
);
console.log(`NOT !: 10 + 3 !== 14 es ${10 + 3 !== 14}`);

// Operadores de asignación
let myNumber = 11; // asignación
console.log(myNumber);
myNumber += 1; // suma y asignación
console.log(myNumber);
myNumber -= 1; // resta y asignación
console.log(myNumber);
myNumber *= 2; // multiplicación y asignación
console.log(myNumber);
myNumber /= 2; // división y asignación
console.log(myNumber);
myNumber %= 2; // módulo y asignación
console.log(myNumber);
myNumber **= 2; // exponente y asignación
console.log(myNumber);

// Estructuras de control

// Condicionales
let myString = "Melara";

if (myString == "Marlon") {
  console.log(`myString es ${myString}`);
} else if (myString == "Melara") {
  console.log(`myString es ${myString}`);
} else {
  console.log(`myString no es ${myString}`);
}

//Iterativas
// for
for (let i = 0; i < 10; i++) {
  console.log(i);
}

// while
let i = 0;

while (i < 10) {
  console.log(i);
  i++;
}

// Manejo de excepciones
try {
  console.log(10 / 0); // Esto no lanzará una excepción en JavaScript; imprimirá "Infinity".
} catch (error) {
  console.log("Se ha producido un error");
} finally {
  console.log("Ha finalizado el manejo de excepciones");
}

/* DIFICULTAD EXTRA (opcional):
 * Crea un programa que imprima por consola todos los números comprendidos
 * entre 10 y 55 (incluidos), pares, y que no son ni el 16 ni múltiplos de 3.
 */

for (let number = 10; number < 56; number++) {
  if (number % 2 == 0 && number != 16 && number % 3 != 0) {
    console.log(number);
  }
}
