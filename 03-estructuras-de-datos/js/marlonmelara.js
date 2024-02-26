// Estructuras de datos

// Arrays
let myList = ["Snoopy", "Charlie", "Luffy", "Zoro"];
console.log(typeof myList);
console.log(myList);

myList.push("Sanji");
console.log(myList);

/** El método filter() no modifica el array original, sino que devuelve un nuevo array. */
let filteredList = myList.filter((item) => item !== "Snoopy");
console.log(filteredList);

/** Para modificar el array original, se reasigna el resultado de filter() a myList: */
myList = myList.filter((item) => item !== "Snoopy");
console.log(myList);

// Cambiar un string por otro
myList[1] = "Linus";
console.log(myList);

// Ordenar los elementos del array
myList.sort();
console.log(myList);

// Haciendo un Array Inmutable con Object.freeze():
let tupla = Object.freeze(["Marlon", "Melara", "@marlonmelara", "999"]);
console.log(typeof tupla);
console.log(tupla);
// tupla.sort();  TypeError: Cannot assign to read only property '0' of object '[object Array]'

/* Sets, son colecciones de valores únicos; es decir, un Set no permitirá duplicados. */
let mySet = new Set(["Marlon", "Melara", "@marlonmelara", "999"]);
console.log(typeof mySet);
console.log(mySet);
mySet.add("991");
console.log(mySet);
mySet.delete("999");
console.log(mySet);

// Objeto literal en JavaScript
let myObj = {
  name: "Marlon",
  lastname: "Melara",
  user: "@marlonmelara",
  code: "999",
};
console.log(typeof myObj); // "object"

delete myObj.lastname; // Eliminación
myObj;
myObj["email"] = "marlon@mail.com"; // Inserción
console.log(myObj);
myObj["code"] = "771"; // Actualización
console.log(myObj);

// Extra
function myAgenda() {
  let name, phone;
  let agenda = {}; // Objeto para almacenar la agenda
  let continuar = true; // Controla el ciclo del menú
  let phoneRegex = /^\s{0}\b\d{11}\b\s{0}$/;
  function phone_Regex() {
    phone = prompt("Ingresa número telefónico del contacto: ", "");
    if (phoneRegex.test(phone)) {
      agenda[name] = phone;
    } else {
      console.log("El número debe tener 11 dígitos, sin espacios.");
    }
  }

  while (continuar) {
    console.log("1. Buscar contacto");
    console.log("2. Insertar contacto");
    console.log("3. Actualizar contacto");
    console.log("4. Eliminar contacto");
    console.log("5. Salir");

    switch (option) {
      case 1:
        // Lógica para buscar contacto
        break;
      case 2:
        // Verifica que phone es numérico y tiene entre 1 y 11 caracteres
        if (/^\d{1,11}$/.test(phone)) {
          agenda[name] = phone;
        } else {
          console.log(
            "Debes introducir un número de teléfono con menos de 12 dígitos"
          );
        }
        break;
      case 3:
        // Lógica para actualizar contacto
        break;
      case 4:
        // Lógica para eliminar contacto
        break;
      case 5:
        console.log("Saliendo de la agenda.");
        continuar = false; // Esto hace que el bucle while termine
        break;
      default:
        console.log("Opción no válida. Elige una opción del 1 al 5.");
    }
  }
}

myAgenda();
