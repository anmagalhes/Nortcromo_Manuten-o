from flask import Flask, render_template

app = Flask("__main__")

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/lerClientes", methods=['POST'])
def lerClientes():
    g.cur.execute(""" SELECT
        id_cliente as id,
        nome_setor,
        cnpj_cliente,        
    FROM cliente
    """)
    columns = list(g.cur.description)
    dados = g.cur.fetchall()

    results = []
    for row in dados:
        row_dict = {}
        for i, col in enumerate(columns):
            row_dict[col.name] = row[i]
        results.append(row_dict)

    return jsonify(dados=results)