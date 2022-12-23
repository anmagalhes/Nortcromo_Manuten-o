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
          Cadastro de Operacao
        </Typography>
        <Paper elevation={3} sx={{ mb: 1, p: 1 }}>
          <Grid container spacing={2}>
            <MyTextField
              xs={2}
              name='id_operacao'
              value={dados.id_operacao}
              label={'id_operacao'}
              disabled={true}
            />
            <Grid item xs={10}></Grid>
            <MyTextField
              xs={6}
              name='Grupo_Processo_operacao'
              value={dados.Grupo_Processo_operacao}
              label={'Grupo_Processo_operacao'}
            />
            <MyTextField
              xs={6}
              name='Descricao_Processo_operacao'
              value={dados.Descricao_Processo_operacao}
              label={'Descricao_Processo_operacao'}
            />
            <MyTextField
              xs={6}
              name='Tipo_operacao'
              value={dados.Tipo_operacao}
              label={'Tipo_operacao'}
            />
            <MyTextField
              xs={6}
              name='Nome_Processo_operacao'
              value={dados.Nome_Processo_operacao}
              label={'Nome_Processo_operacao'}
            />

            <Grid item xs={2}>
              <Button
                variant='outlined'
                onClick={() => {
                  setRender('ListaDeOperacao');
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
                    lancarNoBanco('inserirOperacao');
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
