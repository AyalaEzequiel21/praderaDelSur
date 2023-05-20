import React from 'react';
import { MensageHome } from '.';
import { HomeStyle } from './styled-components/home.styled';

export interface HomeProps {
}

const Home: React.FC<HomeProps> = () => {
	return (
		<HomeStyle>
			<MensageHome/>
		</HomeStyle>
	)
};

export default Home;
