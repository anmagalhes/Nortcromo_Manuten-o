import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import MyAppBar from '../MyAppBar';
import BtnLateral from '../BtnLateral';
import MyTextField from '../MyTextField';
import Grid from '@mui/material/Grid';
import Drawer from '@mui/material/Drawer';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import TabelaDeClientes from '../componentes/TabelaDeClientes';
import SearchIcon from '@mui/icons-material/Search';
import FormControlLabel from '@mui/material/FormControlLabel';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import MyDrawer from '../MyDrawer';
import { useState, useEffect, useContext } from 'react';
import Context from '../multiuso/Context';
import { drawerStyle } from '../stylejs/drawer';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

export default function ListaDeClientes(props) {
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
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <MyAppBar setRender={setRender} />
      <Drawer variant='permanent' sx={drawerStyle}>
        <Toolbar />
        <BtnLateral setRender={setRender} render={render} />
      </Drawer>
      <Box component='main' sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Typography variant='h6' sx={{ mb: 1 }} noWrap component='div'>
          Clientes
        </Typography>
        <Grid container spacing={0.5} sx={{ mb: 1 }}>
          <Grid item xs={2}>
            <Button
              onClick={() => {
                setDados(initialState);
                setRender('FormDeCliente');
              }}
            >
              <AddCircleOutlineIcon />
              Novo Cliente
            </Button>
          </Grid>
          <Grid item xs={6}></Grid>
        </Grid>
        <Grid container spacing={0.5} sx={{ mb: 1 }}>
          <MyTextField xs={11} label='Pesquisar' />
          <Grid item xs={1}>
            <Button sx={{ width: 1, height: 1 }} variant='outlined'>
              <SearchIcon fontSize='large' />
            </Button>
          </Grid>
        </Grid>
        <TabelaDeClientes />
      </Box>
    </Box>
  );
}
