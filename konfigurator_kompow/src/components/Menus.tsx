import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import React from 'react';
import ReactDOM from 'react-dom/client'
import { useNavigate } from 'react-router';
import { NavigateFunction } from 'react-router/dist/lib/hooks';
import Konfig from './Konfig';
import Logowanie from './Logowanie';




// const konfigurator = () => {
//   ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
//     <React.StrictMode>
//       <Konfig src={''} opis={''} />
//     </React.StrictMode>
//   )
// }

const Menus = () => {
  const navigate = useNavigate()
  function logSubmit(event) {
    navigate("/Logowanie.tsx", {replace: true})
  }
  return <MenuLayout />
}

export default Menus;

interface imenulayoutprops {
  navigate: NavigateFunction
}

const MenuLayout = (props:imenulayoutprops) => (
  <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          O nas
        </Typography>
        <Typography onClick={()=>props.navigate("/konfigurator")} variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Konfigurator Komputerów
        </Typography>
        <Button color="inherit" onClick={logSubmit}>Logowanie</Button>
      </Toolbar>
    </AppBar>
  </Box>
)