"""
Estructuras de datos
"""

# Listas
my_list = ["Snoopy","Charlie","Luffy", "Zoro"]
print(my_list)
print(type(my_list))

my_list.append("Sanji")
print(my_list)

my_list.remove("Snoopy")
print(my_list)

my_list[1]="Linus"
print(my_list)

my_list.sort()
print(my_list)

# Tuplas
my_tuple: tuple = ("Marlon", "Melara", "@marlonmelara", "999")
print(type(my_tuple))
print(my_tuple[2])
my_tuple = tuple(sorted(my_tuple))
print(my_tuple)

# Sets
my_set = {"Marlon", "Melara", "@marlonmelara", "999"}
print(type(my_set))
print(my_set)
my_set.add("991") # Inserción
print(my_set)
my_set.remove("999") # Eliminación
print(my_set)

# Dicccionario
my_dict: dict ={"name": "Marlon", "lastname": "Melara", "user": "@marlonmelara", "code": "999"}
print(type(my_dict))

del my_dict["lastname"] # Eliminación
my_dict["email"] = "marlon@mail.com" # Inserción
print(my_dict)
my_dict["code"] = "771" # Actualización
print(my_dict)
my_dict = dict(sorted(my_dict.items()))
print(my_dict)

"""
Extra
"""
def my_agenda():
 agenda = {}

 while True:

  print("")
  print("1. Buscar contacto")
  print("2. Insertar contacto")
  print("3. Actualizar contacto")
  print("4. Eliminar contacto")
  print("5. Salir")

  option = input("\nSelecciona una opción: ")

  match option:
    case "1":
      name = input("Introduce el nombre de contacto a buscar: ")
      if name in agenda:
        print(f"El número de telefono {name} es {agenda[name]}.")
      else:
        print(f"El contacto {name} no existe.")
 
    case "2":
      name = input("Introduce el nombre del contacto: ")
      phone = input("Introduce el teléfono del contacto: ")
      if phone.isdigit() and len(phone) > 0 and len(len) <= 11:
        agenda[name]= phone
      else:
        print("Debes introducir un número de teléfono con menos de 12 dígitos")

    case "3":
      pass
    case "4":
      pass
    case "5":
      print ("Saliendo de la agenda.")
      break
    case _:
      print("Opción no válida. Elige una opción del 1 al 5.")

my_agenda()