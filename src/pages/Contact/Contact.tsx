import React from 'react';
import { ContactStyle, FormContainer, InfoContact, MessageContact } from '.';
import { useGlobalContext } from '../../context/GlobalContext';
import { breakpoints } from '../../data';
import { Separator } from '../../components';
import { infoContactData } from '../../data';

export interface ContactProps {
}

const Contact: React.FC<ContactProps> = () => {
	const {windowWidth} = useGlobalContext()

	return (
		<ContactStyle>
			<MessageContact/>
			<InfoContact data={infoContactData}/>
			{windowWidth < breakpoints.mediumW && <Separator/>}
			<FormContainer/>
		</ContactStyle>
	)
};

export default Contact;
