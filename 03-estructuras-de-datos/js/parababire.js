function my_agenda() {
  let name, phone;
  let on = true;
  let phoneRegex = /^\s{0}\b\d{11}\b\s{0}$/;
  let agenda = {};
  function phone_Regex() {
    phone = prompt("Ingresa número telefónico del contacto: ", "");
    if (phoneRegex.test(phone)) {
      agenda[name] = phone;
    } else {
      console.log("El número debe tener 11 dígitos, sin espacios.");
    }
  }
  function msjError() {
    console.log(`El contacto ${name} no existe.`);
  }

  while (on) {
    console.log("");
    console.log("1.- Buscar contacto");
    console.log("2.- Insertar contacto");
    console.log("3.- Actualizar contacto");
    console.log("4.- Borrar contacto");
    console.log("5.- Salir");

    let operacion = prompt("\nSelecciona una operación: ", "");

    switch (operacion) {
      case "1":
        console.log("");
        name = prompt("Ingresa nombre del contacto a buscar: ", "");
        if (agenda.hasOwnProperty(name)) {
          console.log(`El número de ${name} es: ${agenda[name]}`);
        } else {
          msjError();
        }
        break;
      case "2":
        name = prompt("Ingresa nombre del contacto: ", "");
        phone_Regex();
        break;
      case "3":
        name = prompt("Ingresa nombre del contacto a actualizar: ", "");
        if (agenda.hasOwnProperty(name)) {
          phone_Regex();
        } else {
          msjError();
        }
        break;
      case "4":
        name = prompt("Ingresa nombre del contacto a eliminar: ", "");
        if (agenda.hasOwnProperty(name)) {
          delete agenda[name];
        } else {
          msjError();
        }
        break;
      case "5":
        console.log("Salir del programa.");
        on = false;
        break;
      default:
        console.log("Tu elección no es válida. Elige un número del 1 al 5.");
        break;
    }
  }
}

my_agenda();
