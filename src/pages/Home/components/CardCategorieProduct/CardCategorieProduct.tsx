import React from 'react';
import { Categorie } from '../../../../data';
import { CardCategorieStyle } from '.';

export interface CardCategorieProductProps {
	categorie: Categorie,
}

//  this component is the card for every categorie, contains a image and a title

const CardCategorieProduct: React.FC<CardCategorieProductProps> = ({categorie}) => {
	return (
		<CardCategorieStyle imageUrl={categorie.imageUrl}>
			{/* <img src={categorie.imageUrl} alt='Image categorie'/> */}
			<h3>{categorie.title}</h3>
		</CardCategorieStyle>
	);
};

export default CardCategorieProduct;
