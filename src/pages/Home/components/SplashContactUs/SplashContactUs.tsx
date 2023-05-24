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
				<h3>En nuestra sección de contacto podrás hacernos todas tus consultas y pedirnos el asesoramiento que necesites. ¡Estamos aquí para ayudarte! Completa nuestro formulario y nos pondremos en contacto contigo lo antes posible</h3>
				<Button label='Contacto'/>
			</ActionContainerSplashStyle>
		</SplashContainerStyle>
	)
};

export default SplashContactUs;
