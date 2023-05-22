import React from 'react';
import { CategoriesContainerStyle } from '.';
import { Categorie } from '../../../../data';
import { CardCategorieProduct } from '../CardCategorieProduct';

export interface CategoriesProductsProps {
	dataCategories: Categorie[],
	title: string,
	subTitle: string,
}

// this component is the container for the section of product categories, contains a title and a text under and have other container inside for the categorie cards

const CategoriesProducts: React.FC<CategoriesProductsProps> = ({dataCategories, title, subTitle}) => {
	return (
		<CategoriesContainerStyle>
			<h1>{title}</h1>
			<p>{subTitle}</p>
			<CategoriesContainerStyle>
				{dataCategories.map(item => (
					<CardCategorieProduct key={item.id} categorie={item}/>
				))}
			</CategoriesContainerStyle>
		</CategoriesContainerStyle>
	);
};

export default CategoriesProducts;
