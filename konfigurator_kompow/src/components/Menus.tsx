import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import '../style/Menus.scss'

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
				<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
					<Link to="/Konfig" className='button'>Konfigurator komputerów</Link>
				</Typography>
				<Link to={"/Logowanie"} className='button'>Logowanie</Link>
			</Toolbar>
		</AppBar>
	</Box>
)