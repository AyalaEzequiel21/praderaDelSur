import React from 'react';
import { ButtonStyle } from '.';

export interface ButtonProps {
	label: string,
	onClick: ()=> void
}

const Button: React.FC<ButtonProps> = ({label, onClick}) => {
	return (
		<ButtonStyle onClick={onClick}>
			{label}
		</ButtonStyle>
	);
};

export default Button;
