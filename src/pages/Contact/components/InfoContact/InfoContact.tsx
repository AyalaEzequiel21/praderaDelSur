import React from 'react';
import { InfoContactContainerStyle, ItemsInfoContainerStyle } from '.';
import { ItemInfoContactInterface } from '../../../../data';
import { Map } from '../Map';
import { ItemInfoContact } from '../ItemInfoContact';

export interface InfoContactProps {
	data: ItemInfoContactInterface[]
}

// This component receives data as a parameter, which will be mapped to render its information. It also contains the map with the location.

const InfoContact: React.FC<InfoContactProps> = ({data}) => {
	return (
		<InfoContactContainerStyle>
			<Map/>
			<ItemsInfoContainerStyle>
				{data.map(item=> (
					<ItemInfoContact itemContactData={item} key={item.id}/>
				))}
			</ItemsInfoContainerStyle>
		</InfoContactContainerStyle>
	)
};

export default InfoContact;
