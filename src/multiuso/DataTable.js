import * as React from 'react';
import MyAppBar from './MyAppBar';
import { useState, useEffect, useContext } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { DataGrid } from '@mui/x-data-grid';
import Context from './Context';
import Grid from '@mui/material/Grid';
import Drawer from '@mui/material/Drawer';
import { drawerStyle } from '../stylejs/drawer';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import BtnLateral from '../multiuso/BtnLateral';
import MyTextField from '../multiuso/MyTextField';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import MyLoading from './MyLoading';

let myUrl;
if (document.URL == 'http://localhost:3000/') {
  myUrl = 'http://127.0.0.1:5000/';
} else {
  myUrl = document.URL;
}

export default function DataTable(props) {
  const columns = props.columns;
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
  const [rows, setRows] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch(myUrl + 'lerClientes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then(
        (result) => {
          setRows(result.dados);
          setLoading(false);
        },
        (error) => {
          console.log(error);
        }
      );
  }, []);

  if (isLoading) {
    return <MyLoading />;
  } else {
    return (
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <MyAppBar setRender={setRender} />
        <Drawer variant='permanent' sx={drawerStyle}>
          <Toolbar />
          <BtnLateral setRender={setRender} render={render} />
        </Drawer>
        <Box component='main' sx={{ flexGrow: 1, p: 3 }}>
          <Toolbar />
          <Typography variant='h6' sx={{ mb: 1 }} noWrap component='div'>
            {props.titulo}
          </Typography>
          <Grid container spacing={0.5} sx={{ mb: 1 }}>
            <Grid item xs={2}>
              <Button
                onClick={() => {
                  setDados(initialState);
                  setRender(props.oQueRenderizaComOBtnNovo);
                }}
              >
                <AddCircleOutlineIcon />
                {props.tituloDoBtnNovo}
              </Button>
            </Grid>
            <Grid item xs={6}></Grid>
          </Grid>

          <Grid container spacing={0.5} sx={{ mb: 1 }}>
            <MyTextField xs={11} label='Pesquisar' />
            <Grid item xs={1}>
              <Button sx={{ width: 1, height: 1 }} variant='outlined'>
                <SearchIcon fontSize='large' />
              </Button>
            </Grid>
            <Grid item xs={12}>
              <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                  rows={rows}
                  columns={columns}
                  pageSize={5}
                  rowsPerPageOptions={[5]}
                  onCellClick={(e) => {
                    fetch(myUrl + 'lerLinhaClientes', {
                      method: 'POST',
                      headers: {
                        'Content-Type': 'application/json',
                      },
                      body: JSON.stringify({
                        oQueProcurar: e.id,
                      }),
                    })
                      .then((res) => res.json())
                      .then(
                        (result) => {
                          console.log(result);
                          result = result.dados;
                          setDados(result);
                          setRender('FormDeCliente');
                        },
                        (error) => {
                          console.log(error);
                        }
                      );
                  }}
                />
              </div>
            </Grid>
          </Grid>
        </Box>
      </Box>
    );
  }
}
