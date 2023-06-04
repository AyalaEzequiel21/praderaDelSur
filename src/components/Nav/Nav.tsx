import React from 'react';
import { Link } from 'react-router-dom';
import { ItemNavStyle, NavContainerStyle, NavMenuStyle } from '.';
import {AiOutlineShoppingCart} from 'react-icons/ai'

interface NavProps {
}

const Nav: React.FC<NavProps> = () => {
	return (
		<NavContainerStyle>
			<NavMenuStyle>
				<ItemNavStyle><Link to={'/'}>INICIO</Link></ItemNavStyle>
				<ItemNavStyle><Link to={'/products'}>PRODUCTOS</Link></ItemNavStyle>
				<ItemNavStyle><Link to={'#'}>TIENDA {<AiOutlineShoppingCart/>}</Link></ItemNavStyle>
				<ItemNavStyle><Link to={'/contact'}>CONTACTO</Link></ItemNavStyle>
			</NavMenuStyle>
		</NavContainerStyle>
	);
};


export default Nav;
