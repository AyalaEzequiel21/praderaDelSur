import React from 'react';
import { InfoContactContainerStyle, ItemsInfoContainerStyle } from '.';
import { infoContactData } from '../../../../data';
import { Map } from '../Map';
import { ItemInfoContact } from '../ItemInfoContact';

export interface InfoContactProps {
}

const InfoContact: React.FC<InfoContactProps> = () => {
	return (
		<InfoContactContainerStyle>
			<Map/>
			<ItemsInfoContainerStyle>
				{infoContactData.map(item=> (
					<ItemInfoContact itemContactData={item}/>
				))}
			</ItemsInfoContainerStyle>
		</InfoContactContainerStyle>
	)
};

export default InfoContact;
