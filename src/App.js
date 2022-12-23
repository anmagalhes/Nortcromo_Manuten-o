import * as React from 'react';
import ListaDeClientes from './componentes/ListaDeClientes';
import ListaDeProdutos from './componentes/ListaDeProdutos';
import ListaDeComponentes from './componentes/ListaDeComponentes';
import ListaDeOperacao from './componentes/ListaDeOperacao';
import FormDeCliente from './componentes/FormDeCliente';
import FormDeProduto from './componentes/FormDeProduto';
import FormDeComponente from './componentes/FormDeComponente';
import FormDeOperacao from './componentes/FormDeOperacao';
import Inicio from './componentes/Inicio';
import Context from './multiuso/Context';
import { useState, useEffect, useContext } from 'react';
import { mask } from './multiuso/mask.js';

let myUrl;
if (document.URL == 'http://localhost:3000/') {
  myUrl = 'http://127.0.0.1:5000/';
} else {
  myUrl = document.URL;
}
function App() {
  const [render, setRender] = useState('Inicio');
  const initialState = {
    // Func
    qualFunc: '',
    // Cliente
    id_cliente: '',
    tipo_cliente: '',
    razao_social_cliente: '',
    cnpj_cliente: '',
    whatsapp_cliente: '',
    fone_cliente: '',
    fone_recado_cliente: '',
    cep_cliente: '',
    logradouro_cliente: '',
    numero_cliente: '',
    bairro_cliente: '',
    cidade_cliente: '',
    uf_cliente: '',
    complemento_cliente: '',
    // produtos
    id_produto: '',
    Desc_Produto: '',
    Fornec_Produto: '',
    Estomin_Produto: '',
    Und_Medida_Produto: '',
    Valor_Unid_Produto: '',
    Controle_Produto: '',
    Status_Produto: '',
    Tipo_Produto: '',
    Origem_Produto: '',
    Foto_Produto: '',
    Data_Cadastro_Produto: '',
    Usuario_Cad_Produto: '',
    // servicos
    id_servicos: '',
    grupo_servicos: '',
    sigla_servicos: '',
    material_servicos: '',
    tempo_servicos: '',
    // Componentes
    Id_componentes: '',
    descricao_componentes: '',
    Quantidade_componentes: '',
    DiamentroInterno_componentes: '',
    DiamentroExterno_componentes: '',
    Espessura_componentes: '',
    Altura_componentes: '',
    Material_componentes: '',
    Alojagaxeta_componentes: '',
    Comprimento_componentes: '',
    Intalojgaxeta_componentes: '',
    Largologaxeta_componentes: '',
    DataInicio_componentes: '',
    HoraInicial_componentes: '',
    DataFinal_componentes: '',
    HoraFinal_componentes: '',
    Responsavel_componentes: '',
    Imagem1_componentes: '',
    Imagem2_componentes: '',
    Imagem3_componentes: '',
    Imagem4_componentes: '',
    Status_componentes: '',
    // Operação
    id_operacao: '',
    Grupo_Processo_operacao: '',
    Descricao_Processo_operacao: '',
    Tipo_operacao: '',
    Nome_Processo_operacao: '',
  };
  const [dados, setDados] = useState(initialState);
  const handleChange = (event) => {
    const value = event.target.value;

    setDados((prevState) => {
      return {
        ...prevState,
        [event.target.name]: value,
      };
    });
  };
  const handleChangeComMask = (event) => {
    const value = event.target.value;

    setDados((prevState) => {
      return {
        ...prevState,
        [event.target.name]: mask(value),
      };
    });
  };

  function lancarNoBanco(opt) {
    fetch(myUrl + opt, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        oQueLancar: dados,
      }),
    })
      .then((res) => res.json())
      .then(
        (result) => {
          setRender('Inicio');
        },
        (error) => {
          console.log(error);
        }
      );
  }

  return (
    <Context.Provider
      value={[
        dados,
        setDados,
        handleChange,
        render,
        setRender,
        lancarNoBanco,
        initialState,
        handleChangeComMask,
      ]}
    >
      <Estrutura />
    </Context.Provider>
  );
}

function Estrutura() {
  const [
    dados,
    setDados,
    handleChange,
    render,
    setRender,
    lancarNoBanco,
    initialState,
    handleChangeComMask,
  ] = useContext(Context);

  switch (render) {
    case 'Inicio':
      return <Inicio />;
    case 'ListaDeClientes':
      return <ListaDeClientes />;
    case 'ListaDeProdutos':
      return <ListaDeProdutos />;
    case 'ListaDeComponentes':
      return <ListaDeComponentes />;
    case 'ListaDeOperacao':
      return <ListaDeOperacao />;
    case 'FormDeCliente':
      return <FormDeCliente />;
    case 'FormDeProduto':
      return <FormDeProduto />;
    case 'FormDeComponente':
      return <FormDeComponente />;
    case 'FormDeOperacao':
      return <FormDeOperacao />;
  }
}

export default App;
