"""
Funciones definidas por el usuario
"""

# Simple
def greet ():
  print ("Hola, Python!")

greet ()

# Con retorno
def return_greet():
  return "Hola, Python!"

greet = return_greet()

print(greet)
print(greet)
print(return_greet())

# Con un parámetro
def argGreet (name):
  print(f"Hola, {name}!")

argGreet("Python")

# Con parámetros
def args_greet (greet, name):
  print(f"{greet}, {name}!")

args_greet("Hola","Python")

# Con parámetros determinados
def default_arg_greet (name="Python"):
  print (f"Hola,{name}")

default_arg_greet("PHP")
default_arg_greet()

# Con parámetros indicando el orden de los argumentos
def args_greet (greet, name):
  print(f"{greet}, {name}!")

args_greet(name="Python",greet="Hola")

# Con parámetros y return
def return_args_greet(greet, name):
  return f"{greet}, {name}!"

print(return_args_greet("Hola", "C++"))

# Con retorno de varios valores
def multiple_return_greet():
  return "Hola" , "Python"

greet, name = multiple_return_greet()
print(greet)
print(name)

# Con un número variable de argumentos
def variable_arg_greet(*names):
  for name in names:
    print (f"Hola, {name}!")

variable_arg_greet("Python", "PHP", "Java", "Mundo")

# Con un número variable de argumentos con palabra clave
def variable_key_arg_greet(**names):
  for key, value in names.items():
    print (f"Hola, {value} ({key})!")

variable_key_arg_greet(lenguaje="Python", name= "Charlie", age= 10)

"""
Funciones dentro de funciones
"""

def outer_function():
  def inner_Function():
    print("Función interna: Hola, Python!")
  inner_Function()

outer_function()

# Funciones del lenguaje (built-in)
print(len("Snoopy"))
print(type("Charlie"))
print("Charlie".upper())
print("Charlie".lower())
print("Linus, Lucy".split(","))


"""
Variables locales y globales
"""

global_var = "Python"

def hello_python():
  local_var = "Hola"
  print(f"{local_var}, {global_var}!")
  print(local_var)

print(global_var)
# print(local_var) No se puede acceder desde fuera de la función

hello_python()

"""
EXTRA
"""

def imprimir_numeros(string1, string2):
    count = 0
    if isinstance(string1, str) and isinstance(string2, str):
        for i in range(1, 101):
            if i % 3 == 0 and i % 5 == 0:
                print(f"{string1} {string2}")
            elif i % 3 == 0:
                print(string1)
            elif i % 5 == 0:
                print(string2)
            else:
                print(i)
                count += 1
    else:
        print("El dato proporcionado no es un string")
    print(f"Números impresos: {count}")
    return count

imprimir_numeros("Fizz", "Buzz")





