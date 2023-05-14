import React from 'react';
import styled from 'styled-components';
import { colors, fontSizes } from '../../data';
import { Header, SplashHeader } from '.';

const HeaderContainerStyle = styled.header`
	color: ${colors.white};
	font-size: ${fontSizes.text};
	width: 100%;
`;

interface HeaderContainerProps {

}

// This component have two sub-components: 
// -header that have the logo and nav or the button hamburguer
// -splash that is an image


const HeaderContainer: React.FC<HeaderContainerProps> = () => {
	return (
		<HeaderContainerStyle >
			<Header/>
			<SplashHeader />
		</HeaderContainerStyle>
	)
};

export default HeaderContainer;
