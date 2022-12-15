

while True:
  x = input("escreva algo \n")
  if x.isdigit():
    if int(x) == 1:
      print('Top!')
    elif int(x) == 2:
      print('Massa!')
  elif str(x) == 'sair':
    break



