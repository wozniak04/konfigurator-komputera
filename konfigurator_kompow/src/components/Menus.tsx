import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import React from 'react';
import ReactDOM from 'react-dom/client'
import Konfig from './Konfig';
import Logowanie from './Logowanie';


const logowanie = () => {
  ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
      <Logowanie />
    </React.StrictMode>
  )
}

const konfigurator = () => {
  ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
      <Konfig src={''} opis={''} />
    </React.StrictMode>
  )
}

const Menus = () => {
  return <MenuLayout />
}

export default Menus;

const MenuLayout = () => (
  <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          O nas
        </Typography>
        <Typography onClick={konfigurator} variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Konfigurator Komputerów
        </Typography>
        <Button color="inherit" onClick={logowanie}>Logowanie</Button>
      </Toolbar>
    </AppBar>
  </Box>
)