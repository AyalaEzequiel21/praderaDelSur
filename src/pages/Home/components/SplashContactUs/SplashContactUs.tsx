import React from 'react';
import { ActionContainerSplashStyle, SplashContainerStyle } from '.';
import { Button } from '../../../../components';
import { SplashData } from '../../../../data/homeData/splashContactUs.data';

export interface SplashContactUsProps {
	data: SplashData
}

const SplashContactUs: React.FC<SplashContactUsProps> = ({data}) => {
	return (
		<SplashContainerStyle imageUrl={data.imgUrl}>
			<ActionContainerSplashStyle>
				<h3>{data.text}</h3>
				<Button label='Contacto'/>
			</ActionContainerSplashStyle>
		</SplashContainerStyle>
	)
};

export default SplashContactUs;
