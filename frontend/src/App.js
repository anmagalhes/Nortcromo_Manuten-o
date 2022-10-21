import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Button from '@mui/material/Button';
import DataTable from './DataTable';
import DataTable2 from './DataTable2';
import DataTable3 from './DataTable3';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import SearchIcon from '@mui/icons-material/Search';
import { useState, useEffect, useContext } from 'react';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import FactoryOutlinedIcon from '@mui/icons-material/FactoryOutlined';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import HomeIcon from '@mui/icons-material/Home';
import BuildIcon from '@mui/icons-material/BuildOutlined';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import {
  Routes,
  Route,
  Link,
  useParams,
  useNavigate,
  Navigate,
} from 'react-router-dom';

const drawerWidth = 200;

function App() {
  return <Estrutura />;
}

function MyAppBar(props) {
  return (
    <AppBar
      position='fixed'
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar>
        <HomeIcon
          onClick={() => {
            props.setRender('Inicio');
          }}
          sx={{ cursor: 'pointer' }}
        />
        <Typography variant='h6' noWrap component='div' sx={{ ml: 1 }}>
          Sistema de Controle Interno
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

function BtnLateral(props) {
  return (
    <Box sx={{ overflow: 'auto' }}>
      <List>
        <ListItem disablePadding>
          <ListItemButton
            onClick={() => {
              props.setRender('ListaDeOS');
            }}
          >
            <BuildIcon fontSize='small' /> Ordem de Serviço
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            onClick={() => {
              props.setRender('ListaDeClientes');
            }}
          >
            <BadgeOutlinedIcon /> Clientes
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            onClick={() => {
              alert('esta parte ainda não foi programada');
            }}
          >
            <FactoryOutlinedIcon />
            Setores
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
}

function Estrutura() {
  const navigate = useNavigate();
  const [render, setRender] = useState('Inicio');
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

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
            <DataTable3 />
          </Box>
        </Box>
      );
    case 'FormDeCliente':
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
              Cadastro de Cliente
            </Typography>
            <Paper elevation={3} sx={{ mb: 1, p: 1 }}>
              <Grid container spacing={2}>
                <Grid item xs={2}>
                  <FormControl fullWidth>
                    <InputLabel>Tipo</InputLabel>
                    <Select label='Tipo'>
                      <MenuItem value={'FÍSICA'}>FÍSICA</MenuItem>
                      <MenuItem value={'JURÍDICA'}>JURÍDICA</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <MyTextField xs={10} label={'Razão Social'} />
                <MyTextField xs={3} label={'CNPJ'} />
                <MyTextField xs={3} label={'DDD + WhatsApp'} />
                <MyTextField xs={3} label={'DDD + Fone'} />
                <MyTextField xs={3} label={'Fone Recado'} />
                <MyTextField xs={2} label={'CEP'} />
                <MyTextField xs={10} label={'Logradouro'} />
                <MyTextField xs={2} label={'Número'} />
                <MyTextField xs={4} label={'Bairro'} />
                <MyTextField xs={5} label={'Cidade'} />
                <MyTextField xs={1} label={'UF'} />
                <MyTextField xs={12} label={'Complemento'} />
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
                    <Button variant='outlined'>Salvar</Button>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </Box>
        </Box>
      );
  }
}

function MyTextField(props) {
  return (
    <Grid item xs={props.xs}>
      <TextField label={props.label} variant='outlined' fullWidth />
    </Grid>
  );
}

export default App;
