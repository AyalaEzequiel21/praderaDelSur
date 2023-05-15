import React from 'react';
import { Link } from 'react-router-dom';
import { ItemNav, NavContainer, NavMenu } from '.';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

interface NavProps {
}

const Nav: React.FC<NavProps> = () => {
	return (
		<NavContainer>
			<NavMenu>
				<ItemNav><Link to={'/'}>INICIO</Link></ItemNav>
				<ItemNav><Link to={'#'}>PRODUCTOS</Link></ItemNav>
				<ItemNav><Link to={'#'}>BOUTIQUE {<ShoppingCartIcon/>}</Link></ItemNav>
				<ItemNav><Link to={'#'}>CONTACTO</Link></ItemNav>
			</NavMenu>
		</NavContainer>
	);
};


export default Nav;
