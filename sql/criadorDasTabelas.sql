DROP TABLE IF EXISTS clientes;

CREATE TABLE clientes (
	id_cliente                SERIAL PRIMARY KEY,
	tipo_cliente              TEXT,
	razao_social_cliente      TEXT,
	cnpj_cliente              TEXT,
	whatsapp_cliente          TEXT,
	fone_cliente              TEXT,
	fone_recado_cliente       TEXT,
	cep_cliente               TEXT,
	logradouro_cliente        TEXT,
	numero_cliente            TEXT,
	bairro_cliente             TEXT,
	cidade_cliente            TEXT,
	uf_cliente                TEXT,
	complemento_cliente       TEXT,
	databr_cliente            DATE,
	horario_cliente           TIME
);

