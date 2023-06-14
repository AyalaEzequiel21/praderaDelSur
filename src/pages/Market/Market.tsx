import React from 'react';
import { MarketContainerStyle } from '.';
import image from '../../assets/obras.jpg'

export type MarketProps = {
}

const Market: React.FC<MarketProps> = () => {
	return (
		<MarketContainerStyle>
			<h1>Estamos trabajando en esta seccion.. Muy pronto estara lista</h1>
			<img src={image} alt="Imagen de una persona trabajando" />
		</MarketContainerStyle>
	)
};

export default Market;
