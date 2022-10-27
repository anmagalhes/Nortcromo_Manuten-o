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
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import { useState, useEffect, useContext } from 'react';
import Context from '../multiuso/Context';
import { drawerStyle } from '../stylejs/drawer';

export default function FormDoProduto(props) {
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
      <MyAppBar />
      <Drawer variant='permanent' sx={drawerStyle}>
        <Toolbar />
        <BtnLateral />
      </Drawer>
      <Box component='main' sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Typography variant='h6' sx={{ mb: 1 }} noWrap component='div'>
          Cadastro de Produto
        </Typography>
        <Paper elevation={3} sx={{ mb: 1, p: 1 }}>
          <Grid container spacing={2}>
            <MyTextField
              xs={2}
              name='id_produtos'
              value={dados.id_produtos}
              label={'id_produtos'}
              disabled={true}
            />
            {/* <Grid item xs={10}></Grid> */}
            <Grid item xs={2}>
              <FormControl fullWidth>
                <InputLabel>Tipo do Produto</InputLabel>
                <Select
                  label='Tipo do Produto'
                  name='tipo_produtos'
                  value={dados.tipo_produtos}
                  onChange={handleChange}
                >
                  <MenuItem value={'Peça'}>Peça</MenuItem>
                  <MenuItem value={'Produto'}>Produto</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <MyTextField
              xs={8}
              name='origem_produtos'
              value={dados.origem_produtos}
              label={'Origem do Produto'}
            />
            <MyTextField
              xs={12}
              name='descricao_produtos'
              value={dados.descricao_produtos}
              label={'Descrição'}
            />
            <MyTextField
              xs={4}
              name='fornecedor_produtos'
              value={dados.fornecedor_produtos}
              label={'Fornecedor'}
            />
            <MyTextField
              xs={4}
              name='estoque_minimo_produtos'
              value={dados.estoque_minimo_produtos}
              label={'Estoque Mínimo'}
            />
            <MyTextField
              xs={4}
              name='status_produtos'
              value={dados.status_produtos}
              label={'Status do Produto'}
            />

            <Grid item xs={2}>
              <Button
                variant='outlined'
                onClick={() => {
                  setRender('ListaDeProdutos');
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
