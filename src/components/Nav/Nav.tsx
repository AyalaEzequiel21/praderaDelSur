import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface NavProps {
}

const NavContainer = styled.div`

`

const NavMenu = styled.nav`

`

const ItemNav = styled.li`

`

const Nav: React.FC<NavProps> = () => {
	return (
		<NavContainer>
			<NavMenu>
				<Link to={'/'}><ItemNav>Inicio</ItemNav></Link>
				<Link to={'#'}><ItemNav>Productos</ItemNav></Link>
				<Link to={'#'}><ItemNav>Contacto</ItemNav></Link>
			</NavMenu>
		</NavContainer>
	);
};


export default Nav;
