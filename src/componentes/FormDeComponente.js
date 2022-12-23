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
          Cadastro de Componente
        </Typography>
        <Paper elevation={3} sx={{ mb: 1, p: 1 }}>
          <Grid container spacing={2}>
            <MyTextField
              xs={2}
              name='Id_componentes'
              value={dados.Id_componentes}
              label={'Id_componentes'}
              disabled={true}
            />
            <Grid item xs={10}></Grid>
            <MyTextField
              xs={6}
              name='descricao_componentes'
              value={dados.descricao_componentes}
              label={'descricao_componentes'}
            />
            <MyTextField
              xs={6}
              name='Quantidade_componentes'
              value={dados.Quantidade_componentes}
              label={'Quantidade_componentes'}
            />
            <MyTextField
              xs={6}
              name='DiamentroInterno_componentes'
              value={dados.DiamentroInterno_componentes}
              label={'DiamentroInterno_componentes'}
            />
            <MyTextField
              xs={6}
              name='DiamentroExterno_componentes'
              value={dados.DiamentroExterno_componentes}
              label={'DiamentroExterno_componentes'}
            />
            <MyTextField
              xs={6}
              name='Espessura_componentes'
              value={dados.Espessura_componentes}
              label={'Espessura_componentes'}
            />
            <MyTextField
              xs={6}
              name='Altura_componentes'
              value={dados.Altura_componentes}
              label={'Altura_componentes'}
            />
            <MyTextField
              xs={6}
              name='Material_componentes'
              value={dados.Material_componentes}
              label={'Material_componentes'}
            />
            <MyTextField
              xs={6}
              name='Alojagaxeta_componentes'
              value={dados.Alojagaxeta_componentes}
              label={'Alojagaxeta_componentes'}
            />
            <MyTextField
              xs={6}
              name='Comprimento_componentes'
              value={dados.Comprimento_componentes}
              label={'Comprimento_componentes'}
            />
            <MyTextField
              xs={6}
              name='Intalojgaxeta_componentes'
              value={dados.Intalojgaxeta_componentes}
              label={'Intalojgaxeta_componentes'}
            />
            <MyTextField
              xs={6}
              name='Largologaxeta_componentes'
              value={dados.Largologaxeta_componentes}
              label={'Largologaxeta_componentes'}
            />
            <MyTextField
              xs={6}
              name='DataInicio_componentes'
              value={dados.DataInicio_componentes}
              label={'DataInicio_componentes'}
            />
            <MyTextField
              xs={6}
              name='HoraInicial_componentes'
              value={dados.HoraInicial_componentes}
              label={'HoraInicial_componentes'}
            />
            <MyTextField
              xs={6}
              name='DataFinal_componentes'
              value={dados.DataFinal_componentes}
              label={'DataFinal_componentes'}
            />
            <MyTextField
              xs={6}
              name='HoraFinal_componentes'
              value={dados.HoraFinal_componentes}
              label={'HoraFinal_componentes'}
            />
            <MyTextField
              xs={6}
              name='Responsavel_componentes'
              value={dados.Responsavel_componentes}
              label={'Responsavel_componentes'}
            />
            <MyTextField
              xs={6}
              name='Imagem1_componentes'
              value={dados.Imagem1_componentes}
              label={'Imagem1_componentes'}
            />
            <MyTextField
              xs={6}
              name='Imagem2_componentes'
              value={dados.Imagem2_componentes}
              label={'Imagem2_componentes'}
            />
            <MyTextField
              xs={6}
              name='Imagem3_componentes'
              value={dados.Imagem3_componentes}
              label={'Imagem3_componentes'}
            />
            <MyTextField
              xs={6}
              name='Imagem4_componentes'
              value={dados.Imagem4_componentes}
              label={'Imagem4_componentes'}
            />
            <MyTextField
              xs={12}
              name='Status_componentes'
              value={dados.Status_componentes}
              label={'Status_componentes'}
            />
            <Grid item xs={2}>
              <Button
                variant='outlined'
                onClick={() => {
                  setRender('ListaDeComponentes');
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
                    lancarNoBanco('inserirComponente');
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
