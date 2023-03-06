import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link, useNavigate } from 'react-router-dom';
import '../style/Menus.scss'
import React, { useEffect} from 'react'
import axios from 'axios'
import { Navigate } from 'react-router-dom';

const Menus = () => {
  const navigate=useNavigate()
  
axios.get('http://localhost:5000/sessionCheck', { withCredentials: true })
    .then((res) => {
      if (!res.data) 
        navigate('/Logowanie')
    })
      .catch((err)=>{
        console.log(err)
        navigate('/Logowanie')
      })


  
  
  return <MenuLayout/>
}

export default Menus;

interface IOMenuProps{
  nazwa:string
  
}

const MenuLayout = () => (
  <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          O nas
        </Typography>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to="/Konfig" className='button'>Konfigurator komputerów</Link>
        </Typography>
        <Link to={'/Logowanie'} className='button' >Wyloguj</Link>
      </Toolbar>
    </AppBar>
  </Box>
)