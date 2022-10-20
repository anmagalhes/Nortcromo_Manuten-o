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
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import {
  Routes,
  Route,
  Link,
  useParams,
  useNavigate,
  Navigate,
} from 'react-router-dom';

const drawerWidth = 150;

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
        <Typography
          variant='h6'
          noWrap
          component='div'
          onClick={() => {
            props.setRender('Inicio');
          }}
        >
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
              props.setRender('InicioOrdemDeServico');
            }}
          >
            Ordem de Serviço
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>Clientes</ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>Setores</ListItemButton>
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
    case 'InicioOrdemDeServico':
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
              <Grid item xs={2}>
                <Button
                  onClick={() => {
                    setRender('NovaOS');
                  }}
                >
                  <AddCircleOutlineIcon />
                  Nova OS
                </Button>
              </Grid>
              <Grid item xs={6}></Grid>
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
    case 'NovaOS':
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
            <Paper elevation={3} sx={{ mb: 1, p: 1 }}>
              <Grid container spacing={2}>
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
            <Paper elevation={3} sx={{ m: 0, p: 1 }}>
              <DataTable2 />

              {/* <Grid container spacing={1}></Grid> */}
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

function Inicio(props) {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position='fixed'
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Typography variant='h6' noWrap component='div'>
            Sistema de Controle Interno
          </Typography>
        </Toolbar>
      </AppBar>
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
        <Box sx={{ overflow: 'auto' }}>
          <List>
            <ListItem disablePadding>
              <ListItemButton
                onClick={() => {
                  props.setRender('InicioOrdemDeServico');
                  // navigate('/InicioOrdemDeServico');
                }}
              >
                Ordem de Serviço
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>Clientes</ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>Setores</ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}

function InicioOrdemDeServico(props) {
  const navigate = useNavigate();

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position='fixed'
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Typography variant='h6' noWrap component='div'>
            Sistema de Controle Interno
          </Typography>
        </Toolbar>
      </AppBar>
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
        <Box sx={{ overflow: 'auto' }}>
          <List>
            {/* <img src='./north_cromo.png' width={220} height={215} /> */}
            <ListItem disablePadding>
              <ListItemButton>Ordem de Serviço</ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>Clientes</ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>Setores</ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
      <Box component='main' sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}
export default App;
