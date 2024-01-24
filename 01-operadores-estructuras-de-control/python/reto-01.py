# Operadores aritméticos
print(f"Suma: 10 + 3 = {10 + 3}")
print(f"Resta: 10 - 3 = {10 - 3}")
print(f"Multiplicación: 10 * 3 = {10 * 3}")
print(f"División: 10 / 3 = {10 / 3}")
print(f"Módulo: 10 % 3 = {10 % 3}")
print(f"Exponente: 10 ** 3 = {10 ** 3}")
print(f"División entera: 10 // 3 = {10 // 3}")

# Operadores de comparación
print(f"Igualdad: 10 == 3 es {10 == 3}")
print(f"Igualdad: 10 != 3 es {10 != 3}")
print(f"Mayor que: 10 > 3 es {10 > 3}")
print(f"Menor que: 10 < 3 es {10 < 3}")
print(f"Mayor o igual que: 10 >= 10 es {10 >= 10}")
print(f"Menor o igual que: 10 <= 3 es {10 <= 3}")

# Operadores lógicos
print(f"AND &&: 10 + 3 == 13 and 5 - 1 == 4 es {10 +3 == 13 and 5 - 1 == 4}")
print(f"OR ||: 10 + 3 == 14 or 5 - 1 == 4 es {10 +3 == 14 or 5 - 1 == 4}")
print(f"NOT !: not 10 + 3 == 14 es {not 10 +3 == 14}")

# Operadores de asignación
my_number = 11 # asignación
print(my_number)
my_number += 1 # suma y asignación
print(my_number)
my_number -= 1 # resta y asignación
print(my_number)
my_number *= 2 # multiplicación y asignación
print(my_number)
my_number /= 2 # división y asignación
print(my_number)
my_number %= 2 # módulo y asignación
print(my_number)
my_number **= 2 # exponente y asignación
print(my_number)

# Operadores de identidad
my_new_number = my_number
print(f"my_number is my_new_number es {my_number is my_new_number}")
print(f"my_number is not my_new_number es {my_number is not my_new_number}")

# Operadores de pertenencia
print(f"'u' in 'mouredev' = {'u' in 'mouredev'}")
print(f"'b' not in 'mouredev' = {'b' not in 'mouredev'}")

"""
Estructuras de control
"""

# Condicionales
my_string = "Melara"

if my_string == "Marlon":
  print("my_string es 'Marlon'")
elif my_string == "Melara":
  print ("my_string es 'Melara'")
else:
  print("my_string no es 'Marlon'")

# Iterativas
# for
for i in range(10):
  print(i)


# while
i = 0

while i < 10:
  print(i)
  i += 1

# Manejo de excepciones
try:
  print(10/0)
except:
  print("Se ha producido un error")
finally:
  print("Ha finalizdo el manejo de excepciones")

for number in range (10, 56):
  if number % 2 == 0 and number != 16 and number % 3 != 0:
    print(number)