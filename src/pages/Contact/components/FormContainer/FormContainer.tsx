import React from 'react';
import { FormContainerStyle } from '.';
import { FormContact } from '../Form';

export interface FormContainerProps {
}

// this component is the container for the form's title and ther form contact

const FormContainer: React.FC<FormContainerProps> = () => {
	return (
		<FormContainerStyle>
			<h1>Formulario de contacto</h1>
			<FormContact/>
		</FormContainerStyle>
	)
};

export default FormContainer;
