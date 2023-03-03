import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import React from 'react';
import ReactDOM from 'react-dom/client'
import { useNavigate } from 'react-router';
import { BrowserRouter as Router,
Routes,
Route,
Link } from 'react-router-dom';

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
 
  return <MenuLayout/>
}

export default Menus;


const MenuLayout = () => (
<>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            O nas
          </Typography>
          <Typography  variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to="/Konfigurator_Kompow">Konfigurator Komputerów</Link>
          </Typography>
          <Button color="inherit"><Link to="/logowanie">Logowanie</Link></Button>
        </Toolbar>
      </AppBar>
    </Box>

    <Routes>
      <Route path="/logowanie" element={<Logowanie/>}/>
      <Route path="/Konfigurator_Kompow" element={<Konfig src="#" opis=""/>}/>
    </Routes>
</>

)