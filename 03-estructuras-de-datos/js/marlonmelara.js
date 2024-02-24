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
