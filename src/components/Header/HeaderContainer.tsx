import React from 'react';
import { Header, HeaderContainerStyle } from '.';

interface HeaderContainerProps {

}

// This component have two sub-components: 
// -header that have the logo and nav or the button hamburguer
// -splash that is an image


const HeaderContainer: React.FC<HeaderContainerProps> = () => {
	return (
		<HeaderContainerStyle id='header'>
			<Header/>
		</HeaderContainerStyle>
	)
};

export default HeaderContainer;
