try:
  numero = int(input("Digite um número: "))
  if numero < 0:
    print("Digite um número válido.")
  else:
    fatorial = 1
    for item in range(1, numero + 1):
      fatorial = fatorial * item
    print("O fatorial de " + str(numero) + " é " + str(fatorial))
except ValueError:
  print("Digite um caracter válido.")