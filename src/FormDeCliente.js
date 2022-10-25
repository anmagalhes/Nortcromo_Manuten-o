import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import MyAppBar from './MyAppBar';
import BtnLateral from './BtnLateral';
import MyTextField from './MyTextField';
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
import MyDrawer from './MyDrawer';

export default function FormDeCliente(props) {
  const drawerWidth = 200;

  const drawerStyle = {
    width: drawerWidth,
    flexShrink: 0,
    [`& .MuiDrawer-paper`]: {
      width: drawerWidth,
      boxSizing: 'border-box',
    },
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <MyAppBar setRender={props.setRender} />
      <MyDrawer setRender={props.setRender} render={props.render} />
      {/* <Drawer variant='permanent' sx={drawerStyle}>
        <Toolbar />
        <BtnLateral setRender={props.setRender} render={props.render} />
      </Drawer> */}
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
                  props.setRender('ListaDeClientes');
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
