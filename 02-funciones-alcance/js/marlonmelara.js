// Funciones definidas por el usuario

// Simple
function greet() {
  console.log("Hola, JavaScript!");
}

greet();

// Con retorno
function returnGreat() {
  return "Hola, JavaScript!";
}

greet = returnGreat();

console.log(greet);
console.log(greet);
console.log(returnGreat());

// Con un parámetro
function artGreet(name) {
  console.log(`Hola, ${name}`);
}

artGreet("JavaScript");

// Con parámetros
function argsGreet1(greet, name) {
  console.log(`${greet}, ${name}`);
}

argsGreet1("Hola", "JavaScript");

// Con parámetros determinados
function defaultArgGreet(name = "JavaScript") {
  console.log(`Hola, ${name}`);
}

defaultArgGreet("PHP");
defaultArgGreet();

// Con parámetros indicando el orden de los argumentos
// Función que acepta un objeto como argumento con desestructuración y valores predeterminados
function argsGreet2({ greet, name } = {}) {
  console.log(`${greet}, ${name}!`);
}

// Llamada a la función con un objeto que contiene los argumentos nombrados
argsGreet2({ name: "JavaScript", greet: "Hola" });
argsGreet2({ name: "Python", greet: "Hi" });

// Con parámetros y return
function returnArgsGreet(greet, name) {
  return `${greet}, ${name}`;
}

console.log(returnArgsGreet("Hola", "C++"));

// 🚩 # Con retorno de varios valores
// Usando un array:
function multipleReturnGreet() {
  return ["Hola", "JavaScript"];
}

const [saludo, lenguaje] = multipleReturnGreet();
console.log(saludo); // "Hola"
console.log(lenguaje); // "JavaScript"

// Usando un objeto:
function multipleReturnGreet2() {
  return { saludo2: "Hola", nombre: "JavaScript" };
}

const { saludo2, nombre } = multipleReturnGreet2();
console.log(greet); // "Hola"
console.log(nombre); // "JavaScript"

// 🚩 # Con un número variable de argumentos
// Definición de la función con parámetros rest
function variableArgGreet(...names) {
  // Itera sobre el array 'names' y realiza una acción para cada elemento
  names.forEach((name) => {
    console.log(`Hola, ${name}!`);
  });
}

// Llamada a la función con varios argumentos
variableArgGreet("Python", "PHP", "Java", "Mundo");

// 🚩 # Con un número variable de argumentos con palabra clave
// Definición de la función que acepta un objeto con propiedades arbitrarias
function variableKeyArgGreet(args) {
  // Itera sobre las propiedades del objeto y realiza una acción para cada par clave-valor
  for (const [key, value] of Object.entries(args)) {
    console.log(`Hola, ${value} (${key})!`);
  }
}

// Llamada a la función con un objeto que contiene los argumentos nombrados
variableKeyArgGreet({ lenguaje: "JavaScript", nombre: "Charlie", edad: 10 });

// 📌 Funciones dentro de funciones
function outerFuction() {
  innerFuction();
  function innerFuction() {
    console.log("Función interna: Hola, JavaScript!");
  }
}

outerFuction();

// Funciones del lenguaje (built-in)
console.log("Snoopy".length);
console.log(typeof "Snoopy");
console.log("Charlie".toUpperCase());
console.log("Charlie".toLowerCase());
console.log("Linus, Lucy".split(","));

// 📌 Variables locales y globales
let globalVar = "JavaScript";

function helloJS() {
  let localVar = "Hola";
  console.log(`${localVar}, ${globalVar}!`);
  console.log(localVar);
}

console.log(globalVar);
// console.log(localVar); No se puede acceder desde fuera de la función

helloJS();

/**
 *
 * DIFICULTAD EXTRA (opcional):
 * Crea una función que reciba dos parámetros de tipo cadena de texto y retorne un número.
 * - La función imprime todos los números del 1 al 100. Teniendo en cuenta que:
 * - Si el número es múltiplo de 3, muestra la cadena de texto del primer parámetro.
 * - Si el número es múltiplo de 5, muestra la cadena de texto del segundo parámetro.
 * - Si el número es múltiplo de 3 y de 5, muestra las dos cadenas de texto concatenadas.
 * - La función retorna el número de veces que se ha impreso el número en lugar de los textos.
 */

function imprimirNumeros(string1, string2) {
  if (typeof string1 === "string" && typeof string2 === "string") {
    let contadorNumeros = 0; // Inicializa un contador para los números impresos
    for (let i = 1; i <= 100; i++) {
      let resultado = "";

      if (i % 3 === 0) {
        resultado += string1;
      }
      if (i % 5 === 0) {
        resultado += string2;
      }
      if (resultado) {
        console.log(resultado); // Imprime los textos compuestos si el resultado no está vacío
      } else {
        console.log(i);
        contadorNumeros++; // Incrementa el contador solo si se imprime un número
      }
    }
    // Retorna la cantidad de números que se han impreso en lugar de los textos
    return contadorNumeros;
  } else {
    console.log("El dato proporcionado no es un string");
    return 0; // Retorna 0 si los argumentos no son strings
  }
}

// Llamada a la función y almacenamiento del valor retornado en una variable
let vecesNumerosImpresos = imprimirNumeros("🚩", "🟢");
console.log(
  `Se imprimieron números en lugar de textos ${vecesNumerosImpresos} veces.`
);
