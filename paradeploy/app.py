from flask import Flask, render_template, jsonify, request, g
from sqlalchemy import create_engine
import requests

app = Flask("__main__")

def transformaEmDict(dados, columns):
    results = []
    for row in dados:
        row_dict = {}
        for i, col in enumerate(columns):
            row_dict[col.name] = row[i]
        results.append(row_dict)
    return results

@app.route("/")
def index():
    return render_template("index.html")

@app.after_request 
def after_request_callback(response): 
    print('AFTER') 
    # g.connection.close()
    # g.engine.dispose()
    return response 

@app.before_request 
def before_request_callback(): 
    print("BEFORE")
    # myDataBase = 'postgresql://antonioMelo:dante123@localhost:5432'
    # app.config["SQLALCHEMY_DATABASE_URI"] = myDataBase
    # engine = create_engine(myDataBase)
    # connection = engine.raw_connection()
    # cur = connection.cursor() 
    # g.connection = connection
    # g.cur = cur
    # g.engine = engine
    # g.user = None

@app.route("/inserirCliente", methods=['POST'])
def inserirCliente():
    oQueLancar = request.json['oQueLancar']
    print(oQueLancar)
    payload = oQueLancar
    url = "https://script.google.com/macros/s/AKfycbyeA9uIs56AofNt5nD_XXsETwdjSVtoxB77DWmJpVYmp7YljfjVcvdgWOe5mddRo9LEUA/exec"
    r = requests.post(url, data=payload)

    # if(oQueLancar['id_cliente'] == ''):
    #     query = """
    #     INSERT INTO
    #         clientes
    #     (
    #         tipo_cliente,
    #         razao_social_cliente,
    #         cnpj_cliente,
    #         whatsapp_cliente,
    #         fone_cliente,
    #         fone_recado_cliente,
    #         cep_cliente,
    #         logradouro_cliente,
    #         numero_cliente,
    #         bairro_cliente,
    #         cidade_cliente,
    #         uf_cliente,
    #         complemento_cliente,
    #         databr_cliente,
    #         horario_cliente
    #     ) VALUES (
    #         '"""+oQueLancar['tipo_cliente']+"""',
    #         '"""+oQueLancar['razao_social_cliente']+"""',
    #         '"""+oQueLancar['cnpj_cliente']+"""',
    #         '"""+oQueLancar['whatsapp_cliente']+"""',
    #         '"""+oQueLancar['fone_cliente']+"""',
    #         '"""+oQueLancar['fone_recado_cliente']+"""',
    #         '"""+oQueLancar['cep_cliente']+"""',
    #         '"""+oQueLancar['logradouro_cliente']+"""',
    #         '"""+oQueLancar['numero_cliente']+"""',
    #         '"""+oQueLancar['bairro_cliente']+"""',
    #         '"""+oQueLancar['cidade_cliente']+"""',
    #         '"""+oQueLancar['uf_cliente']+"""',
    #         '"""+oQueLancar['complemento_cliente']+"""',
    #         CURRENT_DATE,
    #         CURRENT_TIMESTAMP
    #     )       
    #     """
    # else:
    #     query = """
    #     UPDATE clientes
    #         SET
    #             tipo_cliente = '"""+oQueLancar['tipo_cliente']+"""',
    #             razao_social_cliente = '"""+oQueLancar['razao_social_cliente']+"""',
    #             cnpj_cliente = '"""+oQueLancar['cnpj_cliente']+"""',
    #             whatsapp_cliente = '"""+oQueLancar['whatsapp_cliente']+"""',
    #             fone_cliente = '"""+oQueLancar['fone_cliente']+"""',
    #             fone_recado_cliente = '"""+oQueLancar['fone_recado_cliente']+"""',
    #             cep_cliente = '"""+oQueLancar['cep_cliente']+"""',
    #             logradouro_cliente = '"""+oQueLancar['logradouro_cliente']+"""',
    #             numero_cliente = '"""+oQueLancar['numero_cliente']+"""',
    #             bairro_cliente = '"""+oQueLancar['bairro_cliente']+"""',
    #             cidade_cliente = '"""+oQueLancar['cidade_cliente']+"""',
    #             uf_cliente = '"""+oQueLancar['uf_cliente']+"""',
    #             complemento_cliente = '"""+oQueLancar['complemento_cliente']+"""',
    #             databr_cliente = CURRENT_DATE,
    #             horario_cliente = CURRENT_TIMESTAMP
    #         WHERE id_cliente = """+str(oQueLancar['id_cliente'])+""" RETURNING id_cliente;"""

    # g.cur.execute(query)
    # g.connection.commit()
    oQueLancar = ''
    return jsonify(oQueLancar=oQueLancar)

@app.route("/lerClientes", methods=['POST'])
def lerClientes():
    g.cur.execute(""" SELECT
        id_cliente as id,
        razao_social_cliente,
        cnpj_cliente     
    FROM clientes
    """)
    results = transformaEmDict(g.cur.fetchall(), list(g.cur.description))
    return jsonify(dados=results)

@app.route("/lerLinhaClientes", methods=['POST'])
def lerLinhaClientes():
    oQueProcurar = str(request.json['oQueProcurar'])
    g.cur.execute(""" SELECT
        id_cliente,
        tipo_cliente,
        razao_social_cliente,
        cnpj_cliente,
        whatsapp_cliente,
        fone_cliente,
        fone_recado_cliente,
        cep_cliente,
        logradouro_cliente,
        numero_cliente,
        bairro_cliente,
        cidade_cliente,
        uf_cliente,
        complemento_cliente,
        to_char(databr_cliente,'DD/MM/YYYY') as databr_cliente,
        to_char(horario_cliente, 'HH12:MI:SS') as horario_cliente
    FROM clientes WHERE id_cliente = """+oQueProcurar)
    results = transformaEmDict(g.cur.fetchall(), list(g.cur.description))

    return jsonify(dados=results)

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

app.run()