import React from 'react';
import { IconItemStyle, IconsBoxStyle } from '.';
import { IconData } from '../../../../data';

export interface IconsBoxProps {
	data: IconData[]
}

// this component contains a container for three items, every item have a icon and a text

const IconsBox: React.FC<IconsBoxProps> = ({data}) => {
	return (
		<IconsBoxStyle>
			{data.map(item => (
				<IconItemStyle key={item.id}>
					<item.icon/>
					<p>{item.text}</p>
				</IconItemStyle>
			))}
		</IconsBoxStyle>
	)
};

export default IconsBox;
