import React from 'react';
import { Categorie } from '../../../../data';
import { ActionContainerCardStyle, CardCategorieStyle } from '.';
import { Button } from '../../../../components';

export interface CardCategorieProductProps {
	categorie: Categorie,
}

//  this component is the card for every categorie, contains a image and a title

const CardCategorieProduct: React.FC<CardCategorieProductProps> = ({categorie}) => {

	const handleClick = ()=> {
		console.log();
	}

	return (
		<CardCategorieStyle imageUrl={categorie.imageUrl}>
			<ActionContainerCardStyle>
				<h3>{categorie.title}</h3>
				<Button label='Ver todos' onClick={handleClick} isSubmit={false}/>
			</ActionContainerCardStyle>
		</CardCategorieStyle>
	);
};

export default CardCategorieProduct;
