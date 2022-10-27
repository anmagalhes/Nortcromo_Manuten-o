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

export default function FormDoServico(props) {
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
          Cadastro de Serviços
        </Typography>
        <Paper elevation={3} sx={{ mb: 1, p: 1 }}>
          <Grid container spacing={2}>
            <MyTextField
              xs={2}
              name='id_servicos'
              value={dados.id_servicos}
              label={'id_servicos'}
              disabled={true}
            />
            <Grid item xs={2}>
              <FormControl fullWidth>
                <InputLabel>Grupo do Serviço</InputLabel>
                <Select
                  label='Grupo do Serviço'
                  name='grupo_servicos'
                  value={dados.grupo_servicos}
                  onChange={handleChange}
                >
                  <MenuItem value={'Opção 1'}>Opção 1</MenuItem>
                  <MenuItem value={'Opção 2'}>Opção 2</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <MyTextField
              xs={4}
              name='sigla_servicos'
              value={dados.sigla_servicos}
              label={'Sigla do Serviço'}
            />
            <MyTextField
              xs={4}
              name='tempo_servicos'
              value={dados.tempo_servicos}
              label={'Tempo do Servico'}
            />
            <MyTextField
              xs={12}
              name='material_servicos'
              value={dados.material_servicos}
              label={'Material'}
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
                    lancarNoBanco('inserirServico');
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
