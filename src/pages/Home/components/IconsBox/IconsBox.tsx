import React from 'react';
import { IconItemStyle, IconsBoxStyle } from '.';
import { iconsBoxData } from '../../../../data';

export interface IconsBoxProps {
}

const IconsBox: React.FC<IconsBoxProps> = () => {
	return (
		<IconsBoxStyle>
			{iconsBoxData.map(item => (
				<IconItemStyle>
					<item.icon/>
					<p>{item.text}</p>
				</IconItemStyle>
			))}
		</IconsBoxStyle>
	)
};

export default IconsBox;
