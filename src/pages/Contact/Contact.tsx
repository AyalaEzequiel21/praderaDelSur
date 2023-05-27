import React from 'react';
import { ContactStyle, Form, InfoContact, MessageContact } from '.';

export interface ContactProps {
}

const Contact: React.FC<ContactProps> = () => {
	return (
		<ContactStyle>
			<MessageContact/>
			<InfoContact/>
			<Form/>
		</ContactStyle>
	)
};

export default Contact;
