import * as React from 'react';
import FormDeCliente from './componentes/FormDeCliente';
import ListaDeClientes from './componentes/ListaDeClientes';
import ListaDeProdutos from './componentes/ListaDeProdutos';
import FormDeProduto from './componentes/FormDeProduto';
import Inicio from './componentes/Inicio';
import Context from './multiuso/Context';
import { useState, useEffect, useContext } from 'react';
import { mask } from './multiuso/mask.js';

function App() {
  const [render, setRender] = useState('Inicio');
  const initialState = {
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
    id_produtos: '',
    tipo_produtos: '',
    origem_produtos: '',
    descricao_produtos: '',
    fornecedor_produtos: '',
    estoque_minimo_produtos: '',
    status_produtos: '',
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
  function lancarNoBanco(rotaPInserir) {
    fetch('http://127.0.0.1:5000/' + rotaPInserir, {
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
          alert('sucesso');
          setRender('Inicio');
        },
        (error) => {
          alert(error);
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
    case 'FormDeCliente':
      return <FormDeCliente />;
    case 'ListaDeProdutos':
      return <ListaDeProdutos />;
    case 'FormDeProduto':
      return <FormDeProduto />;
  }
}

export default App;
