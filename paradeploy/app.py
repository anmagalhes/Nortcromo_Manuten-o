from flask import Flask, render_template, jsonify, request, g
from sqlalchemy import create_engine
import requests
import pandas as pd
import pygsheets
import os

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
    oQueLancar['qualFunc'] = 'inserirCliente'
    sh = gc.open_by_url("https://docs.google.com/spreadsheets/d/10PZMetlcxl179TLY_YWc0UYk_Wg-T9j-nB6otPagRUg") 
    x = sh.worksheet()
    header = x.get_row(1)
    header = {k: v for v, k in enumerate(header)}
    paraLancar = []
    for i in range(len(header)):
        paraLancar.append('')
    for k, v in header.items():
        paraLancar[v] = oQueLancar[k]

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
    g.cur.execute(""" SELECT
        id_produtos as id,
        descricao_produtos
    FROM produtos
    """)
    results = transformaEmDict(g.cur.fetchall(), list(g.cur.description))
    return jsonify(dados=results)

@app.route("/inserirProduto", methods=['POST'])
def inserirProduto():
    oQueLancar = request.json['oQueLancar']
    if(oQueLancar['id_produtos'] == ''):
        query = """
        INSERT INTO
            produtos
        (
            tipo_produtos,
            origem_produtos,
            descricao_produtos,
            fornecedor_produtos,
            estoque_minimo_produtos,
            status_produtos
        ) VALUES (
            '"""+oQueLancar['tipo_produtos']+"""',
            '"""+oQueLancar['origem_produtos']+"""',
            '"""+oQueLancar['descricao_produtos']+"""',
            '"""+oQueLancar['fornecedor_produtos']+"""',
            '"""+oQueLancar['estoque_minimo_produtos']+"""',
            '"""+oQueLancar['status_produtos']+"""'
        )       
        """
    else:
        query = """
        UPDATE produtos
            SET
                tipo_produtos = '"""+oQueLancar['tipo_produtos']+"""',
                origem_produtos = '"""+oQueLancar['origem_produtos']+"""',
                descricao_produtos = '"""+oQueLancar['descricao_produtos']+"""',
                fornecedor_produtos = '"""+oQueLancar['fornecedor_produtos']+"""',
                estoque_minimo_produtos = '"""+oQueLancar['estoque_minimo_produtos']+"""',
                status_produtos = '"""+oQueLancar['status_produtos']+"""'
            WHERE id_produtos = """+str(oQueLancar['id_produtos'])+""" RETURNING id_produtos;"""

    g.cur.execute(query)
    g.connection.commit()
    return jsonify(oQueLancar=oQueLancar)

@app.route("/lerLinhaProdutos", methods=['POST'])
def lerLinhaProdutos():
    oQueProcurar = str(request.json['oQueProcurar'])
    g.cur.execute(""" SELECT
        id_produtos,
        tipo_produtos,
        origem_produtos,
        descricao_produtos,
        fornecedor_produtos,
        estoque_minimo_produtos,
        status_produtos
    FROM produtos WHERE id_produtos = """+oQueProcurar)
    results = transformaEmDict(g.cur.fetchall(), list(g.cur.description))

    return jsonify(dados=results)

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