from flask import Flask, render_template, jsonify, request, g
from sqlalchemy import create_engine
import requests
import pandas as pd
import pygsheets
import os
from datetime import date, datetime

app = Flask("__main__")

gc = pygsheets.authorize(service_file=os.getcwd() + '/nortcromo-61c5d81ddb12.json') 

urlDosComponentes = "https://docs.google.com/spreadsheets/d/1L-G3AkFpFHMgPt71dsGgPFET7AYEWmy7_7N-INifVIY"

urlOperacao = "https://docs.google.com/spreadsheets/d/1snnF28wSSQW_86MkVafE-7gOEKXuEX1Kz3f0rpnXRHo/"

def transformaEmDict(dados, columns):
    results = []
    for row in dados:
        row_dict = {}
        for i, col in enumerate(columns):
            row_dict[col] = row[i]
        results.append(row_dict)
    return results

@app.route("/")
def index():
    return render_template("index.html")

@app.after_request 
def after_request_callback(response): 
    print('AFTER') 
    return response 

@app.before_request 
def before_request_callback(): 
    print("BEFORE")

@app.route("/inserirCliente", methods=['POST'])
def inserirCliente():
    oQueLancar = request.json['oQueLancar']
    data_atual = date.today()
    oQueLancar['databr_cliente'] = data_atual.strftime("%d/%m/%Y")
    data_atual = datetime.now()
    oQueLancar['horario_cliente'] = data_atual.strftime("%H:%M")

    sh = gc.open_by_url("https://docs.google.com/spreadsheets/d/10PZMetlcxl179TLY_YWc0UYk_Wg-T9j-nB6otPagRUg") 
    x = sh.worksheet()
    header = x.get_row(1)
    header = {k: v for v, k in enumerate(header)}
    paraLancar = []
    for i in range(len(header)):
        paraLancar.append('')

    for k, v in header.items():
        paraLancar[v] = oQueLancar[k]

    if oQueLancar['id_cliente'] == '':
        x.add_rows(1)
        paraLancar[0] = str(x.rows)
        x.update_values('A' + str(x.rows), [paraLancar])
    else:
        df = pd.DataFrame(x.get_all_values())
        new_header = df.iloc[0] 
        df = df[1:] 
        df.columns = new_header 
        linhaDoCliente = df.loc[df['id_cliente'] == oQueLancar['id_cliente']].index.tolist()[0]
        print(linhaDoCliente)
        x.update_values('A' + str(linhaDoCliente + 1), [paraLancar])

    return jsonify(oQueLancar=oQueLancar)

@app.route("/lerClientes", methods=['POST'])
def lerClientes():
    sh = gc.open_by_url("https://docs.google.com/spreadsheets/d/10PZMetlcxl179TLY_YWc0UYk_Wg-T9j-nB6otPagRUg") 
    x = sh.worksheet()
    y = x.get_all_values()
    y[0][0] = 'id'
    results = transformaEmDict(y[1:len(y)], list(y[0]))
    return jsonify(dados=results)

@app.route("/lerLinhaClientes", methods=['POST'])
def lerLinhaClientes():
    oQueProcurar = str(request.json['oQueProcurar'])
    sh = gc.open_by_url("https://docs.google.com/spreadsheets/d/10PZMetlcxl179TLY_YWc0UYk_Wg-T9j-nB6otPagRUg") 
    x = sh.worksheet()
    df = pd.DataFrame(x)
    new_header = df.iloc[0] 
    df = df[1:] 
    df.columns = new_header 
    valoresAchados = df.loc[df['id_cliente'] == oQueProcurar]
    valoresAchados = valoresAchados.to_dict(orient='records')[0]
    valoresAchados['id_cliente'] = valoresAchados['id_cliente']
    return jsonify(dados=valoresAchados)

@app.route("/lerProdutos", methods=['POST'])
def lerProdutos():
    sh = gc.open_by_url("https://docs.google.com/spreadsheets/d/1lg3dsCwVH_3e0k5Dsoo0VTVscRMOQWH0L8ZLif4gEWU/") 
    x = sh.worksheet()
    y = x.get_all_values()
    y[0][0] = 'id'
    results = transformaEmDict(y[1:len(y)], list(y[0]))
    return jsonify(dados=results)

@app.route("/lerLinhaProdutos", methods=['POST'])
def lerLinhaProdutos():
    oQueProcurar = str(request.json['oQueProcurar'])
    sh = gc.open_by_url("https://docs.google.com/spreadsheets/d/1lg3dsCwVH_3e0k5Dsoo0VTVscRMOQWH0L8ZLif4gEWU/") 
    x = sh.worksheet()
    df = pd.DataFrame(x)
    new_header = df.iloc[0] 
    df = df[1:] 
    df.columns = new_header 
    valoresAchados = df.loc[df['id_produto'] == oQueProcurar]
    valoresAchados = valoresAchados.to_dict(orient='records')[0]
    valoresAchados['id_produto'] = valoresAchados['id_produto']
    return jsonify(dados=valoresAchados)

@app.route("/inserirProduto", methods=['POST'])
def inserirProduto():
    oQueLancar = request.json['oQueLancar']
    data_atual = date.today()
    oQueLancar['Data_Cadastro_Produto'] = data_atual.strftime("%d/%m/%Y")
    data_atual = datetime.now()
    # oQueLancar['horario_cliente'] = data_atual.strftime("%H:%M")

    sh = gc.open_by_url("https://docs.google.com/spreadsheets/d/1lg3dsCwVH_3e0k5Dsoo0VTVscRMOQWH0L8ZLif4gEWU/") 
    x = sh.worksheet()
    header = x.get_row(1)
    header = {k: v for v, k in enumerate(header)}
    paraLancar = []
    for i in range(len(header)):
        paraLancar.append('')

    for k, v in header.items():
        paraLancar[v] = oQueLancar[k]

    if oQueLancar['id_produto'] == '':
        x.add_rows(1)
        paraLancar[0] = str(x.rows)
        x.update_values('A' + str(x.rows), [paraLancar])
    else:
        df = pd.DataFrame(x.get_all_values())
        new_header = df.iloc[0] 
        df = df[1:] 
        df.columns = new_header 
        linhaDoCliente = df.loc[df['id_produto'] == oQueLancar['id_produto']].index.tolist()[0]
        print(linhaDoCliente)
        x.update_values('A' + str(linhaDoCliente + 1), [paraLancar])

    return jsonify(oQueLancar=oQueLancar)

@app.route("/lerComponentes", methods=['POST'])
def lerComponentes():
    sh = gc.open_by_url(urlDosComponentes) 
    x = sh.worksheet()
    y = x.get_all_values()
    y[0][0] = 'id'
    results = transformaEmDict(y[1:len(y)], list(y[0]))
    return jsonify(dados=results)

@app.route("/lerLinhaComponente", methods=['POST'])
def lerLinhaComponente():
    oQueProcurar = str(request.json['oQueProcurar'])
    sh = gc.open_by_url(urlDosComponentes) 
    x = sh.worksheet()
    df = pd.DataFrame(x)
    new_header = df.iloc[0] 
    df = df[1:] 
    df.columns = new_header 
    valoresAchados = df.loc[df['Id_componentes'] == oQueProcurar]
    valoresAchados = valoresAchados.to_dict(orient='records')[0]
    valoresAchados['Id_componentes'] = valoresAchados['Id_componentes']
    return jsonify(dados=valoresAchados)

@app.route("/inserirComponente", methods=['POST'])
def inserirComponente():
    oQueLancar = request.json['oQueLancar']
    data_atual = date.today()
    oQueLancar['Data_Cadastro_Produto'] = data_atual.strftime("%d/%m/%Y")
    data_atual = datetime.now()
    # oQueLancar['horario_cliente'] = data_atual.strftime("%H:%M")

    sh = gc.open_by_url(urlDosComponentes) 
    x = sh.worksheet()
    header = x.get_row(1)
    header = {k: v for v, k in enumerate(header)}
    paraLancar = []
    for i in range(len(header)):
        paraLancar.append('')

    for k, v in header.items():
        paraLancar[v] = oQueLancar[k]

    if oQueLancar['Id_componentes'] == '':
        x.add_rows(1)
        paraLancar[0] = str(x.rows)
        x.update_values('A' + str(x.rows), [paraLancar])
    else:
        df = pd.DataFrame(x.get_all_values())
        new_header = df.iloc[0] 
        df = df[1:] 
        df.columns = new_header 
        linhaDoCliente = df.loc[df['Id_componentes'] == oQueLancar['Id_componentes']].index.tolist()[0]
        print(linhaDoCliente)
        x.update_values('A' + str(linhaDoCliente + 1), [paraLancar])

    return jsonify(oQueLancar=oQueLancar)

@app.route("/lerOperacoes", methods=['POST'])
def lerOperacoes():
    sh = gc.open_by_url(urlOperacao) 
    x = sh.worksheet()
    y = x.get_all_values()
    y[0][0] = 'id'
    results = transformaEmDict(y[1:len(y)], list(y[0]))
    return jsonify(dados=results)

@app.route("/lerLinhaOperacao", methods=['POST'])
def lerLinhaOperacao():
    oQueProcurar = str(request.json['oQueProcurar'])
    sh = gc.open_by_url(urlOperacao) 
    x = sh.worksheet()
    df = pd.DataFrame(x)
    new_header = df.iloc[0] 
    df = df[1:] 
    df.columns = new_header 
    valoresAchados = df.loc[df['id_operacao'] == oQueProcurar]
    valoresAchados = valoresAchados.to_dict(orient='records')[0]
    valoresAchados['id_operacao'] = valoresAchados['id_operacao']
    return jsonify(dados=valoresAchados)

@app.route("/inserirOperacao", methods=['POST'])
def inserirOperacao():
    oQueLancar = request.json['oQueLancar']
    data_atual = date.today()
    # oQueLancar['Data_Cadastro_Produto'] = data_atual.strftime("%d/%m/%Y")
    # data_atual = datetime.now()
    # oQueLancar['horario_cliente'] = data_atual.strftime("%H:%M")

    sh = gc.open_by_url(urlOperacao) 
    x = sh.worksheet()
    header = x.get_row(1)
    header = {k: v for v, k in enumerate(header)}
    paraLancar = []
    for i in range(len(header)):
        paraLancar.append('')

    for k, v in header.items():
        paraLancar[v] = oQueLancar[k]

    if oQueLancar['id_operacao'] == '':
        x.add_rows(1)
        paraLancar[0] = str(x.rows)
        x.update_values('A' + str(x.rows), [paraLancar])
    else:
        df = pd.DataFrame(x.get_all_values())
        new_header = df.iloc[0] 
        df = df[1:] 
        df.columns = new_header 
        linhaDoCliente = df.loc[df['id_operacao'] == oQueLancar['id_operacao']].index.tolist()[0]
        print(linhaDoCliente)
        x.update_values('A' + str(linhaDoCliente + 1), [paraLancar])

    return jsonify(oQueLancar=oQueLancar)



# app.run()