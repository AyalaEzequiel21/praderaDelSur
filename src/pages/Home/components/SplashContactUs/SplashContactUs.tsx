import React from 'react';
import img from '../../../../assets/contactUs.jpg'
import { ActionContainerSplashStyle, SplashContainerStyle } from '.';
import { Button } from '../../../../components';

export interface SplashContactUsProps {
}

const SplashContactUs: React.FC<SplashContactUsProps> = () => {
	return (
		<SplashContainerStyle imageUrl={img}>
			<ActionContainerSplashStyle>
				<h3>Consulta y asesoramiento personalizado. ¡Estamos aquí para ayudarte! Completa el formulario y te contactaremos pronto</h3>
				<Button label='Contacto'/>
			</ActionContainerSplashStyle>
		</SplashContainerStyle>
	)
};

export default SplashContactUs;
