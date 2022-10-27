

contagem = 5

def talCoisa(imagemParaProcurar):
    try:
        # tenta clicar
    except:
        time.sleep(1) # espera um segundo
        contagem = contagem - 1 # reduz uma tentativa 
        if contagem > 0:
            talCoisa(imagemParaProcurar) # tenta de novo
        else: # acabou as tentativas.
            funcaoParaRecomecarOuAlgoAssim() # recomeça ou vai p outra imagem sei