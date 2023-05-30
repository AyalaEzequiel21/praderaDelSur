import React from 'react';
import { ItemInfoContactInterface } from '../../../../data';
import { ItemInfoContainerStyle } from '.';

export interface ItemInfoContactProps {
	itemContactData: ItemInfoContactInterface
}

const ItemInfoContact: React.FC<ItemInfoContactProps> = ({itemContactData}) => {
	return (
		<ItemInfoContainerStyle>
			<div>
				<itemContactData.icon/>
				<span>{itemContactData.id}:</span>
			</div>
			<p>{itemContactData.text}</p>
		</ItemInfoContainerStyle>
	)
};

export default ItemInfoContact;
