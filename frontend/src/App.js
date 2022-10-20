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
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import SearchIcon from '@mui/icons-material/Search';

const drawerWidth = 200;

function App() {
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
        <Grid container spacing={0.5} sx={{ mb: 1 }}>
          <Grid item xs={2}>
            <Button>
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
}
export default App;
