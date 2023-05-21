import React from 'react';
import { MensageHomeStyle } from './styled-components/mensageHome.styled';

export interface MensageHomeProps {
}

const MensageHome: React.FC<MensageHomeProps> = () => {
	return (
		<MensageHomeStyle>
			<h1>Descubre el sabor que nos distingue, más de 10 años ofreciendo calidad y pasión por nuestros productos.</h1>
			<p>En nuestra empresa, nos apasiona brindarte los mejores productos. Durante más de una década, nos hemos dedicado a seleccionar cuidadosamente cada ingrediente, asegurando su frescura y calidad incomparables. Valoramos la confianza que nuestros clientes depositan en nosotros y nos esforzamos por superar sus expectativas en cada bocado.</p>
		</MensageHomeStyle>
	)
};

export default MensageHome;
