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
            <ShoppingCartOutlinedIcon /> ListaDeProdutos
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
}
