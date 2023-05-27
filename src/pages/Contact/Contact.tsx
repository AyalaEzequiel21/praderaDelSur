import React from 'react';
import { ContactStyle, Form, InfoContact, MessageContact } from '.';

export interface ContactProps {
}

const Contact: React.FC<ContactProps> = () => {
	return (
		<ContactStyle>
			<MessageContact/>
			<Form/>
			<InfoContact/>
		</ContactStyle>
	)
};

export default Contact;
