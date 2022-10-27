import { drawerStyle } from '../stylejs/drawer';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { useState, useEffect, useContext } from 'react';
import MyAppBar from '../MyAppBar';
import Context from '../multiuso/Context';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import BtnLateral from '../BtnLateral';

export default function () {
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
      <MyAppBar setRender={setRender} />
      <Drawer variant='permanent' sx={drawerStyle}>
        <Toolbar />
        <BtnLateral setRender={setRender} render={render} />
      </Drawer>
    </Box>
  );
}
