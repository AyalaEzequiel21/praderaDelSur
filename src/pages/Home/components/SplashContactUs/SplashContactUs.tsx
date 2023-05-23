import React from 'react';
import img from '../../../../assets/contactUs.jpg'
import { SplashContainerStyle } from '.';

export interface SplashContactUsProps {
}

const SplashContactUs: React.FC<SplashContactUsProps> = () => {
	return (
		<SplashContainerStyle imageUrl={img}>

		</SplashContainerStyle>
	)
};

export default SplashContactUs;
