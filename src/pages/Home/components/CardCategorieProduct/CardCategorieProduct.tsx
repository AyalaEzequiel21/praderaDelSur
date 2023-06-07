import React from 'react';
import { Categorie } from '../../../../data';
import { ActionContainerCardStyle, CardCategorieStyle } from '.';
import { Button } from '../../../../components';
import { useNavigate } from 'react-router-dom';

export interface CardCategorieProductProps {
	categorie: Categorie,
}

//  this component is the card for every categorie, contains a image and a title

const CardCategorieProduct: React.FC<CardCategorieProductProps> = ({categorie}) => {

	const navigate = useNavigate()

	const handleClick = ()=> {
		navigate(`/products#${categorie.title}`)
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
