import React from 'react';
import { MensageHomeStyle } from './styled-components/mensageHome.styled';

export interface MensageHomeProps {
}

const MensageHome: React.FC<MensageHomeProps> = () => {
	return (
		<MensageHomeStyle>
			<h1>Descubre el sabor que nos distingue: más de 10 años ofreciendo calidad y pasión por los alimentos.</h1>
		</MensageHomeStyle>
	)
};

export default MensageHome;
