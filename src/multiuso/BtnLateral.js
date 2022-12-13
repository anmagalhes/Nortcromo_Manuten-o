import PlumbingOutlinedIcon from '@mui/icons-material/PlumbingOutlined';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ListItemButton from '@mui/material/ListItemButton';
import BuildIcon from '@mui/icons-material/BuildOutlined';
import FactoryOutlinedIcon from '@mui/icons-material/FactoryOutlined';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import { useState, useEffect, useContext } from 'react';
import Context from '../multiuso/Context';

export default function BtnLateral() {
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

  return (
    <Box sx={{ overflow: 'auto' }}>
      <List>
        <ListItem disablePadding>
          <ListItemButton
            onClick={() => {
              setRender('ListaDeClientes');
            }}
          >
            <BadgeOutlinedIcon /> Clientes
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            onClick={() => {
              setRender('ListaDeProdutos');
            }}
          >
            <ShoppingCartOutlinedIcon /> Lista De Produtos
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            onClick={() => {
              setRender('ListaDeServicos');
            }}
          >
            <PlumbingOutlinedIcon /> Lista de Serviços
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            onClick={() => {
              fetch(
                'https://script.google.com/macros/s/AKfycbysk2kl6zbvesI8tmUvarT7YPQUT8giwn9S_Z4k0yYMXUYD0uByCmzwtdHmL_9tJDCjoA/exec',
                {
                  // headers: {
                  // 'Content-Type': 'application/json',
                  // },
                  // body: JSON.stringify({
                  // oQueLancar: dados,
                  // }),
                }
              )
                .then((res) => res.json())
                .then(
                  (result) => {
                    console.log(result);
                    // alert('sucesso');
                    // setRender('Inicio');
                  },
                  (error) => {
                    console.log(error);
                  }
                );
            }}
          >
            Buscar
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
}
