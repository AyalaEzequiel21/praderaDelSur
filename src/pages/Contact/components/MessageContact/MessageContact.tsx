import React from 'react';
import { MessageContactStyle } from '.';

export interface MessageContactProps {
}

const MessageContact: React.FC<MessageContactProps> = () => {
	return (
		<MessageContactStyle>
			<p>Vias de contacto</p>
			<h1>Aguardamos su consulta</h1>
		</MessageContactStyle>
	)
};

export default MessageContact;
