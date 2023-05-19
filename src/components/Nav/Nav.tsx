import React from 'react';
import { Link } from 'react-router-dom';
import { ItemNavStyle, NavContainerStyle, NavMenuStyle } from '.';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

interface NavProps {
}

const Nav: React.FC<NavProps> = () => {
	return (
		<NavContainerStyle>
			<NavMenuStyle>
				<ItemNavStyle><Link to={'/'}>INICIO</Link></ItemNavStyle>
				<ItemNavStyle><Link to={'#'}>PRODUCTOS</Link></ItemNavStyle>
				<ItemNavStyle><Link to={'#'}>TIENDA {<ShoppingCartIcon/>}</Link></ItemNavStyle>
				<ItemNavStyle><Link to={'/contact'}>CONTACTO</Link></ItemNavStyle>
			</NavMenuStyle>
		</NavContainerStyle>
	);
};


export default Nav;
