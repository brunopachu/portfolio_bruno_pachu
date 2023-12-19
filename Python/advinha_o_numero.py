import random

valor_aleatorio = random.randint(1,10)

try:
  acertou = True
  while acertou is True:
    chute = int(input ("Chute um número: "))
    if chute > valor_aleatorio:
      print ("Chute alto demais!")
    elif chute < valor_aleatorio:
      print ("Chute baixo demais!")
    else:
      acertou = False
      print("Acertou!")
except ValueError:
  print("Não é um número!")