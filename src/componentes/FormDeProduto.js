import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import MyAppBar from '../multiuso/MyAppBar';
import BtnLateral from '../multiuso/BtnLateral';
import MyTextField from '../multiuso/MyTextField';
import Grid from '@mui/material/Grid';
import Drawer from '@mui/material/Drawer';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import { useState, useEffect, useContext } from 'react';
import Context from '../multiuso/Context';
import { drawerStyle } from '../stylejs/drawer';

export default function FormDeCliente(props) {
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
      <MyAppBar setRender={props.setRender} />
      <Drawer variant='permanent' sx={drawerStyle}>
        <Toolbar />
        <BtnLateral />
      </Drawer>
      <Box component='main' sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Typography variant='h6' sx={{ mb: 1 }} noWrap component='div'>
          Cadastro de Produtos
        </Typography>
        <Paper elevation={3} sx={{ mb: 1, p: 1 }}>
          <Grid container spacing={2}>
            <MyTextField
              xs={2}
              name='id_produto'
              value={dados.id_produto}
              label={'id_produto'}
              disabled={true}
            />
            <Grid item xs={10}></Grid>
            <MyTextField
              xs={6}
              name='Desc_Produto'
              value={dados.Desc_Produto}
              label={'Desc_Produto'}
            />
            <MyTextField
              xs={6}
              name='Fornec_Produto'
              value={dados.Fornec_Produto}
              label={'Fornec_Produto'}
            />
            <MyTextField
              xs={6}
              name='Estomin_Produto'
              value={dados.Estomin_Produto}
              label={'Estomin_Produto'}
            />
            <MyTextField
              xs={6}
              name='Und_Medida_Produto'
              value={dados.Und_Medida_Produto}
              label={'Und_Medida_Produto'}
            />
            <MyTextField
              xs={6}
              name='Valor_Unid_Produto'
              value={dados.Valor_Unid_Produto}
              label={'Valor_Unid_Produto'}
            />
            <MyTextField
              xs={6}
              name='Controle_Produto'
              value={dados.Controle_Produto}
              label={'Controle_Produto'}
            />
            <MyTextField
              xs={6}
              name='Status_Produto'
              value={dados.Status_Produto}
              label={'Status_Produto'}
            />
            <MyTextField
              xs={6}
              name='Tipo_Produto'
              value={dados.Tipo_Produto}
              label={'Tipo_Produto'}
            />
            <MyTextField
              xs={6}
              name='Origem_Produto'
              value={dados.Origem_Produto}
              label={'Origem_Produto'}
            />
            <MyTextField
              xs={6}
              name='Foto_Produto'
              value={dados.Foto_Produto}
              label={'Foto_Produto'}
            />
            <MyTextField
              xs={6}
              name='Data_Cadastro_Produto'
              value={dados.Data_Cadastro_Produto}
              label={'Data_Cadastro_Produto'}
            />
            <MyTextField
              xs={6}
              name='Usuario_Cad_Produto'
              value={dados.Usuario_Cad_Produto}
              label={'Usuario_Cad_Produto'}
            />
            <Grid item xs={2}>
              <Button
                variant='outlined'
                onClick={() => {
                  setRender('ListaDeClientes');
                }}
              >
                Voltar
              </Button>
            </Grid>
            <Grid item xs={8}></Grid>
            <Grid item xs={2}>
              <Grid container justifyContent='flex-end'>
                <Button
                  variant='outlined'
                  onClick={() => {
                    lancarNoBanco('inserirProduto');
                  }}
                >
                  Salvar
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </Box>
  );
}
