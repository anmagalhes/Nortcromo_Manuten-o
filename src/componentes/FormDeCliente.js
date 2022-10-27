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
        <BtnLateral setRender={props.setRender} render={props.render} />
      </Drawer>
      <Box component='main' sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Typography variant='h6' sx={{ mb: 1 }} noWrap component='div'>
          Cadastro de Cliente
        </Typography>
        <Paper elevation={3} sx={{ mb: 1, p: 1 }}>
          <Grid container spacing={2}>
            <MyTextField
              xs={2}
              name='id_cliente'
              value={dados.id_cliente}
              label={'id_cliente'}
              disabled={true}
            />
            <Grid item xs={10}></Grid>
            <Grid item xs={2}>
              <FormControl fullWidth>
                <InputLabel>Tipo</InputLabel>
                <Select
                  label='Tipo'
                  name='tipo_cliente'
                  value={dados.tipo_cliente}
                  onChange={handleChange}
                >
                  <MenuItem value={'FÍSICA'}>FÍSICA</MenuItem>
                  <MenuItem value={'JURÍDICA'}>JURÍDICA</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <MyTextField
              xs={10}
              name='razao_social_cliente'
              value={dados.razao_social_cliente}
              label={'Razão Social'}
            />
            <MyTextField
              xs={3}
              name='cnpj_cliente'
              value={dados.cnpj_cliente}
              label={'CNPJ'}
              maskY={true}
            />
            <MyTextField
              xs={3}
              name='whatsapp_cliente'
              value={dados.whatsapp_cliente}
              label={'DDD + WhatsApp'}
            />
            <MyTextField
              xs={3}
              name='fone_cliente'
              value={dados.fone_cliente}
              label={'DDD + Fone'}
            />
            <MyTextField
              xs={3}
              name='fone_recado_cliente'
              value={dados.fone_recado_cliente}
              label={'Fone Recado'}
            />
            <MyTextField
              xs={2}
              name='cep_cliente'
              value={dados.cep_cliente}
              label={'CEP'}
            />
            <MyTextField
              xs={10}
              name='logradouro_cliente'
              value={dados.logradouro_cliente}
              label={'Logradouro'}
            />
            <MyTextField
              xs={2}
              name='numero_cliente'
              value={dados.numero_cliente}
              label={'Número'}
            />
            <MyTextField
              xs={4}
              name='bairro_cliente'
              value={dados.bairro_cliente}
              label={'Bairro'}
            />
            <MyTextField
              xs={5}
              name='cidade_cliente'
              value={dados.cidade_cliente}
              label={'Cidade'}
            />
            <MyTextField
              xs={1}
              name='uf_cliente'
              value={dados.uf_cliente}
              label={'UF'}
            />
            <MyTextField
              xs={12}
              name='complemento_cliente'
              value={dados.complemento_cliente}
              label={'Complemento'}
            />
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
                <Button
                  variant='outlined'
                  onClick={() => {
                    lancarNoBanco('inserirCliente');
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
