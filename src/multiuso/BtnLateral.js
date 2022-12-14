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
            Clientes
            {/* <BadgeOutlinedIcon /> Clientes */}
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            onClick={() => {
              setRender('ListaDeProdutos');
            }}
          >
            Produtos
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            onClick={() => {
              setRender('ListaDeComponentes');
            }}
          >
            Componentes
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            onClick={() => {
              setRender('ListaDeOperacao');
            }}
          >
            Operacao
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
}
