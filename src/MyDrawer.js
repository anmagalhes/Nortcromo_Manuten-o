import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import BtnLateral from './BtnLateral';

export default function MyDrawer(props) {
  const drawerWidth = 200;

  const drawerStyle = {
    width: drawerWidth,
    flexShrink: 0,
    [`& .MuiDrawer-paper`]: {
      width: drawerWidth,
      boxSizing: 'border-box',
    },
  };

  <Drawer variant='permanent' sx={drawerStyle}>
    <Toolbar />
    <BtnLateral setRender={props.setRender} render={props.render} />
  </Drawer>;
}
