import { drawerStyle } from '../stylejs/drawer';

export default function () {
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
