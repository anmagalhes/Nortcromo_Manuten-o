import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import HomeIcon from '@mui/icons-material/Home';
import Typography from '@mui/material/Typography';

export default function MyAppBar(props) {
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
