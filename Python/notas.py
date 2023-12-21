def notas(x, y, z):
  media = (x + y + z) / 3
  if media >= 6:
    return "Aprovado"
  else:
    return "Reprovado"

try:
  nota1 = int(input("Digite a nota 1: "))
  nota2 = int(input("Digite a nota 2: "))
  nota3 = int(input("Digite a nota 3: "))

  if 0 <= nota1 <= 10 and 0 <= nota2 <= 10 and 0 <= nota3 <= 10:
    media_final = notas(nota1, nota2, nota3)
    print(f"Você foi {media_final} com a média {(nota1 + nota2 + nota3) / 3}")
  else:
    print("Insira valores entre 0 e 10")

except ValueError:
  print("Insira valores válidos")