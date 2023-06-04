import React from 'react';
import { ItemInfoContactInterface } from '../../../../data';
import { ItemInfoContainerStyle } from '.';

export interface ItemInfoContactProps {
	itemContactData: ItemInfoContactInterface
}

// this component receives data as a parameter, it will be used to render a contact' item

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
