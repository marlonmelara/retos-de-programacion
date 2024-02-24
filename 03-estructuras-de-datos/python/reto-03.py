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


