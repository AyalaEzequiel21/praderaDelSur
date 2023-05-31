import React from 'react';
import { ContactStyle, FormContainer, InfoContact, MessageContact } from '.';

export interface ContactProps {
}

const Contact: React.FC<ContactProps> = () => {
	return (
		<ContactStyle>
			<MessageContact/>
			<InfoContact/>
			<FormContainer/>
		</ContactStyle>
	)
};

export default Contact;
