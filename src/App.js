import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MyDrawer from './MyDrawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import DataTable from './DataTable';
import DataTable2 from './DataTable2';
import MyTextField from './MyTextField';
import FormDeCliente from './FormDeCliente';
import Context from './multiuso/Context';
import TabelaDeClientes from './TabelaDeClientes';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Select from '@mui/material/Select';
import SearchIcon from '@mui/icons-material/Search';
import { useState, useEffect, useContext } from 'react';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import MyAppBar from './MyAppBar';
import BtnLateral from './BtnLateral';
import { PropaneSharp } from '@mui/icons-material';

const drawerWidth = 200;

function App() {
  const [render, setRender] = useState('ListaDeClientes');
  const initialState = {
    id_cliente: '',
    tipo_cliente: '',
    razao_social_cliente: '',
    cnpj_cliente: '',
    whatsapp_cliente: '',
    fone_cliente: '',
    fone_recado_cliente: '',
    CEP_cliente: '',
    logradouro_cliente: '',
    numero_cliente: '',
    bairro_cliente: '',
    cidade_cliente: '',
    uf_cliente: '',
    complemento_cliente: '',
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
  ] = useContext(Context);

  switch (render) {
    case 'Inicio':
      return (
        <Box sx={{ display: 'flex' }}>
          <CssBaseline />
          <MyAppBar setRender={setRender} />
          <Drawer
            variant='permanent'
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              [`& .MuiDrawer-paper`]: {
                width: drawerWidth,
                boxSizing: 'border-box',
              },
            }}
          >
            <Toolbar />
            <BtnLateral setRender={setRender} render={render} />
          </Drawer>
        </Box>
      );
    case 'ListaDeOS':
      return (
        <Box sx={{ display: 'flex' }}>
          <CssBaseline />
          <MyAppBar setRender={setRender} />
          <Drawer
            variant='permanent'
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              [`& .MuiDrawer-paper`]: {
                width: drawerWidth,
                boxSizing: 'border-box',
              },
            }}
          >
            <Toolbar />
            <BtnLateral setRender={setRender} render={render} />
          </Drawer>
          <Box component='main' sx={{ flexGrow: 1, p: 3 }}>
            <Toolbar />
            <Grid container spacing={0.5} sx={{ mb: 1 }}>
              <Grid item xs={3}>
                <Typography variant='h6' sx={{ mb: 1 }} noWrap component='div'>
                  Ordem de Serviços
                </Typography>
                <Button
                  onClick={() => {
                    setRender('FormDeOS');
                  }}
                >
                  <AddCircleOutlineIcon />
                  Nova OS
                </Button>
              </Grid>
              <Grid item xs={5}></Grid>
              <Grid item xs={2}>
                <TextField label='Data Inicio' variant='outlined' />
              </Grid>
              <Grid item xs={2}>
                <TextField label='Data Fim' variant='outlined' />
              </Grid>
            </Grid>
            <Grid container spacing={0.5} sx={{ mb: 1 }}>
              <Grid item xs={2}>
                <FormControl fullWidth>
                  <InputLabel id='demo-simple-select-label'>
                    Status da OS
                  </InputLabel>
                  <Select value={''} label='Status da OS'>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={9}>
                <TextField fullWidth label='Pesquisar' variant='outlined' />
              </Grid>
              <Grid item xs={1}>
                <Button sx={{ width: 1, height: 1 }} variant='outlined'>
                  <SearchIcon fontSize='large' />
                </Button>
              </Grid>
            </Grid>
            <DataTable />
          </Box>
        </Box>
      );
    case 'FormDeOS':
      return (
        <Box sx={{ display: 'flex' }}>
          <CssBaseline />
          <MyAppBar setRender={setRender} />
          <Drawer
            variant='permanent'
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              [`& .MuiDrawer-paper`]: {
                width: drawerWidth,
                boxSizing: 'border-box',
              },
            }}
          >
            <Toolbar />
            <BtnLateral setRender={setRender} render={render} />
          </Drawer>
          <Box component='main' sx={{ flexGrow: 1, p: 3 }}>
            <Toolbar />
            <Typography variant='h6' sx={{ mb: 1 }} noWrap component='div'>
              Cadastro de Ordem Serviço
            </Typography>
            <Paper elevation={3} sx={{ mb: 1, p: 1 }}>
              <Grid container spacing={2}>
                <Grid item xs={2}>
                  <Button
                    variant='outlined'
                    onClick={() => {
                      setRender('ListaDeOS');
                    }}
                  >
                    Voltar
                  </Button>
                </Grid>
                <Grid item xs={8}></Grid>
                <Grid item xs={2}>
                  <Grid container justifyContent='flex-end'>
                    <Button variant='outlined'>Salvar</Button>
                  </Grid>
                </Grid>
                <MyTextField xs={2} label={'O.S.'} />
                <MyTextField xs={2} label={'Data Recebimento'} />
                <MyTextField xs={2} label={'NF Entrada'} />
                <MyTextField xs={6} label={'Vendedor'} />
                <MyTextField xs={4} label={'CNPJ'} />
                <MyTextField xs={8} label={'Cliente'} />
              </Grid>
            </Paper>
            <Paper elevation={3} sx={{ mb: 1, p: 1 }}>
              <Grid container spacing={2}>
                <MyTextField xs={1} label={'Código'} />
                <MyTextField xs={5} label={'Descrição do Produto'} />
                <MyTextField xs={1} label={'Qtd'} />
                <MyTextField xs={3} label={'Referência do Produto'} />
                <Grid item xs={2}>
                  <FormGroup>
                    <FormControlLabel
                      control={<Checkbox defaultChecked />}
                      label='Necessário Demonstar?'
                    />
                  </FormGroup>
                </Grid>
                <MyTextField xs={3} label={'Origem'} />
                <MyTextField xs={3} label={'Acionamento'} />
                <MyTextField xs={3} label={'Cor'} />
                <MyTextField xs={3} label={'Curso'} />
                <MyTextField xs={2} label={'Pressão do Trabalho'} />
                <MyTextField xs={2} label={'Posição do Trabalho'} />
                <MyTextField xs={8} label={'Queixa do Cliente'} />
                <MyTextField xs={2.5} label={'Imagem1'} />
                <MyTextField xs={2.5} label={'Imagem2'} />
                <MyTextField xs={2.5} label={'Imagem3'} />
                <MyTextField xs={2.5} label={'Imagem4'} />
                <Grid item xs={2}>
                  <Button sx={{ height: 1, width: 1 }}>
                    <AddCircleOutlineIcon />
                  </Button>
                </Grid>
              </Grid>
            </Paper>
            <Paper elevation={3} sx={{ mb: 1, p: 1 }}>
              <DataTable2 />

              {/* <Grid container spacing={1}></Grid> */}
            </Paper>
          </Box>
        </Box>
      );
    case 'ListaDeClientes':
      return (
        <Box sx={{ display: 'flex' }}>
          <CssBaseline />
          <MyAppBar setRender={setRender} />
          <Drawer
            variant='permanent'
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              [`& .MuiDrawer-paper`]: {
                width: drawerWidth,
                boxSizing: 'border-box',
              },
            }}
          >
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
              <Grid item xs={11}>
                <TextField fullWidth label='Pesquisar' variant='outlined' />
              </Grid>
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
    case 'FormDeCliente':
      return <FormDeCliente setRender={setRender} />;
  }
}

export default App;
