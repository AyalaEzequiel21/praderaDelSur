import React from 'react';
import LogoImg from '../../assets/logo.png'
import { Link } from 'react-router-dom';
import { ContainerDataStyle, CopyrightStyle, FooterStyle, LogoFooterStyle } from '.';

export interface FooterProps{
}

// this component have the logo with a link to home, a container with the data and the copyright
const Footer: React.FC<FooterProps> = () => {
	return (
		<FooterStyle >
			<Link to={'/#header'}><LogoFooterStyle src={LogoImg}/></Link>
			<ContainerDataStyle>
				<h5>PRADERA DEL SUR</h5>
				<p>Lunes a viernes 05 a 14 hs - Sábados 06 a 11 hs</p>
				<p>Av. Caminno Gral Belgrano N°1505 - Berazategui</p>
				<p><Link to="tel:+5491143511082">+54 11-4351-2001</Link> - <Link to="tel:+5491132111783">+54 11-3211-1783</Link></p>
				<p><Link to="mailto:praderadelsur.contacto@gmail.com">praderadelsur.contacto@gmail.com</Link></p>
			</ContainerDataStyle>
			<CopyrightStyle>© 2022 FRIGORIFICO PRADERA DEL SUR</CopyrightStyle>
		</FooterStyle>
	)
};


export default Footer;
