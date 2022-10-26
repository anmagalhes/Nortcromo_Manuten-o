import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import BuildIcon from '@mui/icons-material/BuildOutlined';
import FactoryOutlinedIcon from '@mui/icons-material/FactoryOutlined';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';

export default function BtnLateral(props) {
  return (
    <Box sx={{ overflow: 'auto' }}>
      <List>
        <ListItem disablePadding>
          <ListItemButton
            onClick={() => {
              props.setRender('ListaDeOS');
            }}
          >
            <BuildIcon fontSize='small' /> Ordem de Serviço
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            onClick={() => {
              props.setRender('ListaDeClientes');
            }}
          >
            <BadgeOutlinedIcon /> Clientes
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
}
