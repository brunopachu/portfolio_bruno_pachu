def notas (x, y, z):
  aprovado = 6
  notas2 = [x, y, z]
  media = (x + y + z) / len(notas2)
  if media >= aprovado:
    return "APROVADO"
  else:
    return "REPROVADO"

try:
  nota1 = int(input ("Digite a nota 1: "))
  if nota1<0 or nota1>10:
    print ("Insira valores entre 0 e 10")
  else:
    nota2 = int(input ("Digite a nota 2: "))
    if nota2<0 or nota2>10:
      print ("Insira valores entre 0 e 10")
    else:
      nota3 = int(input ("Digite a nota 3: "))
      if nota3<0 or nota3>10:
        print ("Insira valores entre 0 e 10")
      else:
        media_final = notas (nota1, nota2, nota3)
        print (f"Resultado Final: {media_final}")
except ValueError:
  print ("Insira valores válidos")