import React from 'react';
import { IconsBox, MensageHome } from '.';
import { HomeStyle } from './styled-components/home.styled';

export interface HomeProps {
}

const Home: React.FC<HomeProps> = () => {
	return (
		<HomeStyle>
			<MensageHome/>
			<IconsBox/>
		</HomeStyle>
	)
};

export default Home;
