import React from 'react';
import { CardsProductsContainer, ProductsContainerStyle } from '..';
import { messageProducts, productsList } from '../../data';
import { CardProduct } from './components/CardProduct';

export interface ProductsProps {
}

const Products: React.FC<ProductsProps> = () => {
	return (
		<ProductsContainerStyle>
			<h1>{messageProducts}</h1>
			<CardsProductsContainer>
				{productsList.map(item => (
					<CardProduct key={item.id} product={item}/>
				))}
			</CardsProductsContainer>
		</ProductsContainerStyle>
	)
};

export default Products;
