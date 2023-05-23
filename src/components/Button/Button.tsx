import React from 'react';
import { ButtonStyle } from '.';

export interface ButtonProps {
	label: string,
}

const Button: React.FC<ButtonProps> = ({label}) => {
	return (
		<ButtonStyle>
			{label}
		</ButtonStyle>
	);
};

export default Button;
