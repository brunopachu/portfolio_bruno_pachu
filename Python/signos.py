def obter_signo(mes, dia):
  if (mes ==1 and 21<= dia <=31) or (mes ==2 and 1<= dia <=18):
    return "Aquário"
  elif (mes ==2 and 19<= dia <=29) or (mes==3 and 1<= dia <= 20):
    return "Peixes"
  elif (mes ==3 and 21<= dia <=31) or (mes==4 and 1<= dia <=20):
    return "Áries"
  elif (mes ==4 and 21<= dia <=30) or (mes==5 and 1<= dia <=20):
    return "Touro"
  elif (mes ==5 and 21<= dia <=31) or (mes ==6 and 1<= dia <=20):
    return "Gêmeos"
  elif (mes ==6 and 21<= dia <=30) or (mes ==7 and 1<= dia <=22):
    return "Câncer"
  elif (mes ==7 and 23<= dia <=31) or (mes ==8 and 1<= dia <=22):
    return "Leão"
  elif (mes==8 and 23<= dia <=31) or (mes ==9 and 1<= dia <=22):
    return "Virgem"
  elif (mes ==9 and 23<= dia <=31) or (mes ==10 and 1<= dia <=22):
    return "Libra"
  elif (mes ==10 and 23<= dia <=31) or (mes==11 and 1<= dia <=21):
    return "Escorpião"
  elif (mes==11 and 22<= dia <=30) or (mes==12 and 1<= dia <=21):
    return "Sagitário"
  elif (mes==12 and 22<= dia <=31) or (mes==1 and 1<= dia <=20):
    return "Capricórnio"
  else:
    return "inválido, reveja os dados inseridos."

try:
  
  dia = int(input("Insira DIA de nascimento: "))
          
  mes = int(input("Insira MÊS de nascimento: "))
    
  signo = obter_signo (mes, dia)

  print ("Seu signo é: ", signo)

except ValueError: 
  print("Dados inválidos. Insira apenas números inteiros.")