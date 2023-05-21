import React from 'react';
import { IconsBox, MensageHome } from '.';
import { HomeStyle } from './styled-components/home.styled';
import { Separator } from '../../components';

export interface HomeProps {
}

const Home: React.FC<HomeProps> = () => {
	return (
		<HomeStyle>
			<MensageHome/>
			<IconsBox/>
			<Separator/>
		</HomeStyle>
	)
};

export default Home;
