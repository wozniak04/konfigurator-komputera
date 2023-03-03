import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

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
					<Link to="/Konfig">Konfigurator komputerów</Link>
				</Typography>
				<Button color="inherit"><Link to={"/Logowanie"}>Logowanie</Link></Button>
			</Toolbar>
		</AppBar>
	</Box>
)