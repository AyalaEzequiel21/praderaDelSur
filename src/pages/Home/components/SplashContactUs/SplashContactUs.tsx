import React from 'react';
import { ActionContainerSplashStyle, SplashContainerStyle } from '.';
import { Button } from '../../../../components';
import { SplashData } from '../../../../data/homeData/splashContactUs.data';
import { useNavigate } from 'react-router-dom';

export interface SplashContactUsProps {
	data: SplashData
}

const SplashContactUs: React.FC<SplashContactUsProps> = ({data}) => {

	const navigate = useNavigate()

	const handleClick: ()=> void = ()=> {
		navigate('/contact')
	}


	return (
		<SplashContainerStyle imageUrl={data.imgUrl}>
			<ActionContainerSplashStyle>
				<h3>{data.text}</h3>
				<Button label='Contacto' onClick={handleClick}/>
			</ActionContainerSplashStyle>
		</SplashContainerStyle>
	)
};

export default SplashContactUs;
