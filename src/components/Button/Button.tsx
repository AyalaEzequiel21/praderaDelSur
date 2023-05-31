import React from 'react';
import { ButtonStyle } from '.';

export interface ButtonProps {
	label: string,
	isSubmit: boolean,
	onClick: undefined | (()=> void),
}

const Button: React.FC<ButtonProps> = ({label, onClick, isSubmit}) => {
	return (
		<ButtonStyle type={isSubmit? 'submit' : undefined} onClick={onClick}>
			{label}
		</ButtonStyle>
	);
};

export default Button;
