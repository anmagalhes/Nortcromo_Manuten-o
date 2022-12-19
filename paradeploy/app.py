from flask import Flask, render_template, jsonify, request, g
from sqlalchemy import create_engine
import requests
import pandas as pd
import pygsheets
import os
from datetime import date, datetime

app = Flask("__main__")

gc = pygsheets.authorize(service_file=os.getcwd() + '/nortcromo-61c5d81ddb12.json') 

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
    
@app.route("/lerServicos", methods=['POST'])
def lerServicos():
    g.cur.execute(""" SELECT
        id_servicos as id,
        sigla_servicos
    FROM servicos
    """)
    results = transformaEmDict(g.cur.fetchall(), list(g.cur.description))
    return jsonify(dados=results)

@app.route("/inserirServico", methods=['POST'])
def inserirServico():
    oQueLancar = request.json['oQueLancar']
    if(oQueLancar['id_servicos'] == ''):
        query = """
        INSERT INTO
            servicos
        (
            grupo_servicos,
            sigla_servicos,
            material_servicos,
            tempo_servicos
        ) VALUES (
            '"""+oQueLancar['grupo_servicos']+"""',
            '"""+oQueLancar['sigla_servicos']+"""',
            '"""+oQueLancar['material_servicos']+"""',
            '"""+oQueLancar['tempo_servicos']+"""'
        )       
        """
    else:
        query = """
        UPDATE servicos
            SET
                grupo_servicos = '"""+oQueLancar['grupo_servicos']+"""',
                sigla_servicos = '"""+oQueLancar['sigla_servicos']+"""',
                material_servicos = '"""+oQueLancar['material_servicos']+"""',
                tempo_servicos = '"""+oQueLancar['tempo_servicos']+"""'
            WHERE id_servicos = """+str(oQueLancar['id_servicos'])+""" RETURNING id_servicos;"""

    g.cur.execute(query)
    g.connection.commit()
    return jsonify(oQueLancar=oQueLancar)

@app.route("/lerLinhaServicos", methods=['POST'])
def lerLinhaServicos():
    oQueProcurar = str(request.json['oQueProcurar'])
    g.cur.execute(""" SELECT
        id_servicos,
        grupo_servicos,
        sigla_servicos,
        material_servicos,
        tempo_servicos
    FROM servicos WHERE id_servicos = """+oQueProcurar)
    results = transformaEmDict(g.cur.fetchall(), list(g.cur.description))

    return jsonify(dados=results)

# app.run()